#!/usr/bin/env tsx

import { program } from 'commander'
import { listenFileAndExec } from './listenFileAndExec'

program
   //====================== listen-file-and-exec * 开始 ======================

   .option('--listen-file-and-exec')
   .option('--listen-file <value>')
   .option('--exec <value>')

//====================== listen-file-and-exec * 结束 ======================

program.parse()

const {
   help,
   listenFileAndExec: isListenFileAndExec,
   listenFile,
   exec,
} = program.opts()

if (isListenFileAndExec) {
   await listenFileAndExec(listenFile, exec)
}
