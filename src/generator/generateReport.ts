import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

type GenerationOptions = {
  reportFile: string
  outputFile: string
}

export const REPLACEMENT_VAR = '__ARTILLERY_REPORT__'

export async function generateReport(options: GenerationOptions) {
  const reportObject = JSON.parse(await readFile(options.reportFile, 'utf8'))

  const templatePath = path.resolve(import.meta.dirname, '../template/index.html')
  const template = await readFile(templatePath, 'utf8')
  const reportHtml = template.replace(
    `window.${REPLACEMENT_VAR} = {}`,
    `window.${REPLACEMENT_VAR} = ${JSON.stringify(reportObject)}`,
  )

  await writeFile(options.outputFile, reportHtml)
}
