import { playgroundXmindTempParsedFolderName } from './folder'

export const getImgSrcPrefix = (mmdataName: string) =>
   `${
      process.env.NODE_ENV === 'development' ? 'http://localhost:6688/' : '/'
   }${playgroundXmindTempParsedFolderName}/${mmdataName}`
