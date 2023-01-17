import { MMData } from '@mindmapppt/mm-data'

const getSectionMeta = (
   item: MMData[number],
   /** 所在层级的总长度 */
   levelLen: number,
   index: number,
   parentLevelLen: number,
   parentIndex: number,
   deepLevel: number,
   parentX: number,
   parentY: number,
): SectionMeta => {
   return {
      mmdata: item,
      levelLen: levelLen,
      index: index,
      parentLevelLen: parentLevelLen,
      parentIndex: parentIndex,
      deepLevel: deepLevel,
      parentX,
      y:
         deepLevel % 2
            ? parentY
            : parentY + index * 1500 - ((levelLen - 1) / 2) * 1500,
      x:
         deepLevel % 2
            ? parentX + index * 1500 - ((levelLen - 1) / 2) * 1500
            : parentX,
      z: deepLevel * -3000,
   }
}

export type SectionMeta = {
   mmdata: MMData[number]
   levelLen: number
   index: number
   parentLevelLen: number
   parentIndex: number
   deepLevel: number
   parentX: number
   x: number
   z: number
   y: number
   children?: SectionMeta[]
}

/** 渲染树第一层级，作为瀑布的第一层 */
export const getSectionMetas = (
   items?: MMData,
   deepLevel: number = 0,
   parentLevelLen: number = 0,
   parentIndex: number = 0,
   parentX: number = 0,
   parentY: number = 0,
): SectionMeta[] => {
   return (
      items?.map((item, index) => {
         const meta = getSectionMeta(
            item,
            items.length,
            index,
            parentLevelLen,
            parentIndex,
            deepLevel,
            parentX,
            parentY,
         )

         return {
            ...meta,
            children: getSectionMetas(
               item.children,
               deepLevel + 1,
               items.length,
               index,
               meta.x,
               meta.y,
            ),
         }
      }) ?? []
   )
}
