import colors from 'picocolors'
import {
  intro,
  outro,
  text,
  confirm,
  log,
  isCancel,
  spinner
} from '@clack/prompts'
import { exitProgram, extractLanguagesCode } from './utils.js'
import { translateJson } from './translate-json.js'

const sourceFilePathArg = process.argv[2]
const sortArg = process.argv[3]

intro(colors.bold('jlatte ☕ is ready to translate your .json file'))

const sourceFilePath = sourceFilePathArg ?? await text({
  message: colors.cyan('What is the path to your source file?') + colors.dim(' Ex.: languages/en.json')
})

if (isCancel(sourceFilePath)) exitProgram()

const { error, languageCodes: targetLangs } = extractLanguagesCode(sourceFilePath)

if (error) {
  exitProgram({ message: error })
}

const sourceLang = targetLangs.shift()

log.step(`Detected ${colors.blue(`"${sourceLang}"`)} as source language.`)

const sort = sortArg
  ? sortArg === 'true'
  : await confirm({
    message: colors.cyan('Do you want to sort the keys?')
  })

if (isCancel(sort)) exitProgram()

const s = spinner()
s.start('Translating...')

translateJson({ sourceLang, targetLangs, sourceFilePath, sort })
  .then(() => {
    s.stop(colors.green('✅ All done!'))
    outro('Thank you for use jlatte ☕')
  })
  .catch((err) => {
    s.stop(err)
    exitProgram()
  })
