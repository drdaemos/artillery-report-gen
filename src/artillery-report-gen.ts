#!/usr/bin/env node

import { resolve } from 'node:path'
import { program } from 'commander'
import { generateReport } from './generator/generateReport.js'

program
  .version('1.0.0')
  .description('Artillery JSON-to-HTML report generator')
  .requiredOption('-r, --report <path>', 'output file path')
  .requiredOption('-o, --output <path>', 'output file path')
  .action((options) => {
    void generateReport({
      reportFile: resolve(process.cwd(), options.report),
      outputFile: resolve(process.cwd(), options.output),
    })
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(options)
  })

program.parse(process.argv)
