import { MMData } from '@mindmapppt/mm-data'
import { flattenDeep } from 'lodash'
import sanitizeHtml from 'sanitize-html'
import { getSectionMetas, SectionMeta } from './getSectionMetas'

export const MMDataToImpress = ({
   data,
   imgSrcPrefix = '',
}: {
   data: MMData
   imgSrcPrefix?: string
}) => {
   const renderSection = (item: SectionMeta & { key?: string }) => {
      const { mmdata, deepLevel, z, x, y, key } = item

      const hasImg = !!mmdata.imgUrls?.[0]

      return (
         <div
            key={key ?? mmdata.id}
            className='step'
            data-deep-level={deepLevel}
            data-z={z}
            data-x={x}
            data-y={y}
         >
            {mmdata.imgUrls?.[0] ? (
               <img
                  src={`${imgSrcPrefix}${mmdata.imgUrls?.[0]}`}
                  alt={`${mmdata.title}-img`}
                  style={{
                     height: 180,
                     margin: '0 auto 3rem auto',
                     background: 'transparent',
                  }}
               ></img>
            ) : null}
            {hasImg ? <h3>{mmdata.title}</h3> : <h2>{mmdata.title}</h2>}
            {mmdata.contentHTML ? (
               <div
                  dangerouslySetInnerHTML={{
                     __html: sanitizeHtml(mmdata.contentHTML),
                  }}
               ></div>
            ) : null}
         </div>
      )
   }

   /** 渲染树第一层级，作为瀑布的第一层 */
   const renderSections = (
      items?: SectionMeta[],
      level: number = 0,
   ): (React.ReactElement | React.ReactElement[])[] => {
      return (
         items?.map((item, index) => {
            if (!item.children?.length) {
               return renderSection(item)
            }
            return [
               renderSection(item),
               renderSections(item.children, level + 1),
               level > 0
                  ? renderSection({
                       ...item,
                       key: item.mmdata.id + '_tail', // 防止重复
                    })
                  : [],
            ] as React.ReactElement[]
         }) ?? []
      )
   }

   return (
      <>
         <div className='fallback-message'>
            <p>
               您的浏览器 <b>不支持某些必备的功能</b>，
               所以你会看到这条简化的提示信息
            </p>
            <p>
               为了获得最佳体验，请使用最新版本 <b>Chrome</b>，<b>Safari</b> 或{' '}
               <b>Firefox</b> 的浏览器.
            </p>
         </div>
         <div className='impress-wrapper'>
            <div
               id='impress'
               data-transition-duration='1000'
               data-width='1024'
               data-height='768'
               // data-max-scale='3'
               // data-min-scale='0'
               data-perspective='1000'
               // data-autoplay='7'
            >
               {flattenDeep(renderSections(getSectionMetas(data)))}
            </div>
            <div id='impress-toolbar'></div>
         </div>
      </>
   )
}
