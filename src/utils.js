import { outro } from '@clack/prompts'
import colors from 'picocolors'
import * as fs from 'node:fs'
import * as path from 'node:path'
import 'dotenv/config'
import { LANGUAGES } from './constants.js'

export function exitProgram ({
  code = 0,
  message = 'The translations has been canceled.'
} = {}) {
  outro(colors.yellow(message))
  process.exit(code)
}

export const extractLanguagesCode = (sourceFilePath) => {
  const sourcePath = path.join(process.cwd(), sourceFilePath)
  const sourceDir = path.dirname(sourceFilePath)

  if (!fs.existsSync(sourcePath)) {
    return { error: `Source file ${sourceFilePath} not found.` }
  }

  const sourceFileName = path.basename(sourceFilePath, '.json')
  const filesInFolder = fs.readdirSync(sourceDir)

  if (!Object.values(LANGUAGES).includes(sourceFileName)) {
    return { error: `Language code "${sourceFileName}" is not an available language code. Check the list of available languages at ${colors.blue('https://github.com/JepriCreations/jlatte')}` }
  }

  const languageCodes = filesInFolder
    .filter((fileName) => fileName.endsWith('.json'))
    .map((fileName) => {
      const matches = fileName.match(/^(.+)\.json$/)
      return matches && matches[1]
    })
    .filter((code) => code !== undefined)
    .sort((a, b) => (a === sourceFileName ? -1 : b === sourceFileName ? 1 : 0))

  return { languageCodes }
}

export const sortObjectKeysRecursive = (obj) => {
  if (typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectKeysRecursive)
  }

  const sortedObj = {}
  const keys = Object.keys(obj).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  )
  for (const key of keys) {
    sortedObj[key] = sortObjectKeysRecursive(obj[key])
  }
  return sortedObj
}
