import { MMData } from '@mindmapppt/mm-data'
import fs from 'fs-extra'
import path from 'path'
import semver from 'semver'
import { AttachedNode, XmindContent, XmindNode } from './typings'

/**
 * 将脑图数据的图片 url 转换成 http url
 * eg: "xap:resources/fb96c55c1fee109385d12ae0f8a1630312240654bf936e7c1f56dc4366db1445.svg"
 * -> resources/fb96c55c1fee109385d12ae0f8a1630312240654bf936e7c1f56dc4366db1445.svg
 */
const convertImageSrc = (src: string) => {
   return src.replace(/^xap:/, '/')
}

const xmindToMMDataV2x = (content: XmindContent): MMData => {
   const { rootTopic } = content[0]

   const eachMap = (nodes: XmindNode[], nodeParent?: XmindNode): MMData => {
      return nodes.map((node) => {
         let children: MMData = []
         if (node.children?.attached) {
            children = eachMap(node.children.attached, node)
         }

         const attachedNode = node as AttachedNode

         return {
            id: attachedNode.id,
            title: attachedNode.title,
            content: attachedNode.notes?.plain?.content,
            contentHTML: attachedNode.notes?.realHTML?.content,
            imgUrls: attachedNode.image?.src
               ? [convertImageSrc(attachedNode.image?.src)]
               : undefined,
            children,
         }
      })
   }

   return eachMap([rootTopic])
}

export const xmindToMMData = (filePath: string) => {
   const content: XmindContent = fs.readJSONSync(
      path.join(filePath, 'content.json'),
   )

   const { coreVersion } = content[0]

   if (semver.satisfies(coreVersion, '2.x')) {
      return xmindToMMDataV2x(content)
   }

   throw new Error(
      `xmind 画布版本 ${coreVersion} 当前不支持解析，请联系管理员新增`,
   )
}
