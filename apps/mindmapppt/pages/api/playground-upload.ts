import { parseXmindFile, xmindToMMData } from '@mindmapppt/xmind-to-mmdata'
import {
   mmdataFileName,
   playgroundXmindTempMmdataFolderName,
} from 'constants/folder'
import formidable, { File } from 'formidable'
import fs from 'fs-extra'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { saveFormDataFiles } from 'utils/saveFiles'

export const config = {
   api: {
      bodyParser: false,
   },
}

export default async function playgroundUpload(
   req: NextApiRequest,
   res: NextApiResponse<{}>,
) {
   const { body, method } = req

   if (method === 'POST') {
      const form = formidable({})
      form.parse(req, async (error, fields, files) => {
         if (error) {
            res.status(500).json({
               message: '解析表单数据失败',
               detail: error,
            })
            return
         }

         const now = new Date()
         const tempSpaceName = `temp-${now.getDate()}-${now.getMonth()}-${now.getDay()}-${now.getTime()}`

         let successFiles: File[] = []
         try {
            successFiles = await saveFormDataFiles(
               files,
               path.join(
                  process.cwd(),
                  'playground-xmind-temp-files',
                  tempSpaceName,
               ),
            )
         } catch {
            res.status(500).json({
               message: '保存文件失败',
            })
            return
         }

         const savedFile = successFiles[0]

         if (!savedFile) {
            res.status(500).json({
               message: '保存文件失败',
            })
            return
         }

         try {
            const parsedDataDirPath = await parseXmindFile(
               savedFile.filepath,
               path.join(
                  process.cwd(),
                  'playground-xmind-temp-parsed',
                  tempSpaceName,
               ),
            )

            const mmData = await xmindToMMData(parsedDataDirPath)

            const writeToRelPath = path.join(
               playgroundXmindTempMmdataFolderName,
               tempSpaceName,
               mmdataFileName,
            )

            const writeToPath = path.join(process.cwd(), writeToRelPath)

            fs.ensureFileSync(writeToPath)

            fs.writeJSONSync(writeToPath, mmData)

            res.json({
               tempSpaceName,
            })
            return
         } catch {
            res.status(500).json({ message: '解析文件失败' })
            return
         }
      })

      return
   }
}
