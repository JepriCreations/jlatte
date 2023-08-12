import * as fs from 'node:fs'
import * as path from 'node:path'
import translate from 'translate'
import 'dotenv/config'
import { sortObjectKeysRecursive } from './utils.js'

const translateObject = async ({ obj, targetObj, sourceLang, targetLang }) => {
  const tasks = Object.keys(obj).map(async (key) => {
    if (typeof obj[key] === 'object') {
      const translatedObj = await translateObject({
        obj: obj[key],
        targetObj: targetObj[key] || {},
        sourceLang,
        targetLang
      })
      return [key, translatedObj]
    } else if (typeof obj[key] === 'string' && !targetObj[key]) {
      const textToTranslate = obj[key]
      const translation = await translate(textToTranslate, {
        from: sourceLang,
        to: targetLang
      })
      return [key, translation]
    }
    return [key, targetObj[key]] // Use existing translation
  })

  const translatedArray = await Promise.all(tasks)
  const translatedObj = translatedArray.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  return translatedObj
}

const translateJson = async ({
  sourceLang,
  targetLangs,
  sourceFilePath,
  sort = true
}) => {
  const sourcePath = path.join(process.cwd(), sourceFilePath)
  const sourceDir = path.dirname(sourceFilePath)

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source file ${sourceFilePath} not found.`)
  }

  const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'))

  const sortedSourceData = sort
    ? sortObjectKeysRecursive(sourceData)
    : sourceData

  const translationPromises = targetLangs.map(async (targetLang) => {
    let targetData = {}

    const targetFileName = `${targetLang}.json`
    const targetFilePath = path.join(sourceDir, targetFileName)

    if (fs.existsSync(targetFilePath)) {
      const targetFileContent = fs.readFileSync(targetFilePath, 'utf8')
      if (targetFileContent.trim() !== '') {
        targetData = JSON.parse(targetFileContent)
      }
    }

    const translatedTargetData = await translateObject({
      obj: sortedSourceData,
      targetObj: targetData,
      sourceLang,
      targetLang
    })

    const sortedTargetData = sort
      ? sortObjectKeysRecursive(translatedTargetData)
      : translatedTargetData

    fs.writeFileSync(targetFilePath, JSON.stringify(sortedTargetData, null, 2))
  })

  await Promise.all(translationPromises)

  if (sort) {
    fs.writeFileSync(sourcePath, JSON.stringify(sortedSourceData, null, 2))
  }
}

export { translateJson }
