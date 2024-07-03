#!/usr/bin/env node

import { program } from 'commander'

program
  .version('1.0.0')
  .description('Artillery JSON-to-HTML report generator')
  .option('-r, --report <type>', 'output file path')
  .option('-o, --output <type>', 'output file path')
  .action((options) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log(options)
  })

program.parse(process.argv)
