import extractZip from 'extract-zip'
import fs from 'fs-extra'
import path from 'path'

export const parseXmindFile = async (filePath: string, toPath: string) => {
   const { name } = path.parse(filePath)

   const outputDirPath = toPath

   fs.ensureDirSync(outputDirPath)

   await extractZip(filePath, { dir: outputDirPath })
   console.log('xmind parse complete', path.join(outputDirPath, name))

   return outputDirPath
}
