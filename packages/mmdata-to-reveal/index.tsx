import { MMData } from '@mindmapppt/mm-data'
import sanitizeHtml from 'sanitize-html'

import React from 'react'

export const MMDataToReval = ({
   data,
   imgSrcPrefix = '',
}: {
   data: MMData
   imgSrcPrefix?: string
}) => {
   const renderSectionInner = (item: MMData[number]) => {
      const hasImg = !!item.imgUrls?.[0]

      return (
         <>
            {item.imgUrls?.[0] ? (
               <img
                  src={`${imgSrcPrefix}${item.imgUrls?.[0]}`}
                  alt={`${item.title}-img`}
                  style={{
                     height: 180,
                     margin: '0 auto 3rem auto',
                     background: 'transparent',
                  }}
               ></img>
            ) : null}
            {hasImg ? <h3>{item.title}</h3> : <h2>{item.title}</h2>}
            {item.contentHTML ? (
               <div
                  dangerouslySetInnerHTML={{
                     __html: sanitizeHtml(item.contentHTML),
                  }}
               ></div>
            ) : null}
         </>
      )
   }

   const renderSection = (item?: MMData[number]) => {
      if (!item) return null
      return <section key={item.id}>{renderSectionInner(item)}</section>
   }

   /** 从子元素依次往下层走，每一层的第一个节点取到，再转换成 section，形成一个数组返回 */
   const renderSubLevelTree = (children?: MMData) => {
      let arr: React.ReactElement[] = []

      const eachPick = (children?: MMData) => {
         if (children?.length) {
            const el = renderSection(children[0])
            if (el) {
               arr.push(el)
            }
            eachPick(children[0].children)
         }
      }

      eachPick(children)

      return arr
   }

   /** 渲染树第一层级，作为瀑布的第一层 */
   const renderSections = (items?: MMData) => {
      return items?.map((item) => {
         return (
            <section key={item.id}>
               {item.children?.length ? (
                  <>
                     {renderSection(item)}
                     {renderSubLevelTree(item.children)}
                  </>
               ) : (
                  renderSectionInner(item)
               )}
            </section>
         )
      })
   }

   return (
      <div className='reveal'>
         <div className='slides'>
            {renderSection(data[0])}
            {renderSections(data[0].children)}
         </div>
      </div>
   )
}
