import { MMDataToImpress } from '@mindmapppt/mmdata-to-impress'
import {
   mmdataFileName,
   playgroundXmindTempMmdataFolderName,
} from 'constants/folder'
import { getImgSrcPrefix } from 'constants/imgSrcPrefix'
import fs from 'fs-extra'
import Script from 'next/script'
import path from 'path'

export default async function PlaygroundRevealPage({
   params,
}: {
   params: {
      mmdata: string
   }
}) {
   const data = await fs.readJSON(
      path.join(
         path.join(process.cwd()),
         playgroundXmindTempMmdataFolderName,
         params.mmdata,
         mmdataFileName,
      ),
   )

   return (
      <>
         <MMDataToImpress
            data={data}
            imgSrcPrefix={getImgSrcPrefix(params.mmdata)}
         />
         <Script src='/impress-scripts.js'></Script>
      </>
   )
}
