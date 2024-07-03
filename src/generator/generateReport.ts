import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { build } from 'vite'

type GenerationOptions = {
  reportFile: string
  outputFile: string
}

export async function generateReport(options: GenerationOptions) {
  const reportObject = JSON.parse(await readFile(options.reportFile, 'utf8'))

  await build({
    root: path.resolve(import.meta.dirname, '../report-template'),
    define: {
      __ARTILLERY_REPORT_JSON__: reportObject,
    },
    build: {
      outDir: path.resolve(options.outputFile),
    },
  })
}
