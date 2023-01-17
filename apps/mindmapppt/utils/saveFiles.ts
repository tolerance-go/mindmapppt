import { File, Files } from 'formidable'
import fs from 'fs-extra'
import path from 'path'

export const saveFormDataFiles = async (files: Files, toPath: string) => {
   const successFiles: File[] = []

   await fs.ensureDir(toPath)

   for (const fileKey in files) {
      const filesValue = Array.isArray(files[fileKey])
         ? (files[fileKey] as File[])
         : [files[fileKey] as File]

      for (const file of filesValue) {
         const data = await fs.readFile(file.filepath)
         const saveToPath = path.join(
            toPath,
            file.originalFilename ?? file.newFilename,
         )

         await fs.writeFile(saveToPath, data)

         /** 删除临时文件，注意在覆盖前执行 */
         await fs.unlink(file.filepath)

         /** 覆盖临时文件路径 */
         file.filepath = saveToPath

         successFiles.push(file)
      }
   }

   return successFiles
}
