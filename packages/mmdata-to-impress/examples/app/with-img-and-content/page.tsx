import Script from 'next/script'
import { MMDataToImpress } from '../../../MMDataToImpress'

export default async function PlaygroundRevealPage() {
   return (
      <>
         <MMDataToImpress
            imgSrcPrefix='/demo'
            data={[
               {
                  id: 'b6fba32a5998f4471032b9a135',
                  title: '中心主题',
                  imgUrls: [
                     '/resources/fb96c55c1fee109385d12ae0f8a1630312240654bf936e7c1f56dc4366db1445.svg',
                  ],
                  content: `asdfasdfasdfasdf

                  sdfasdf
                  asdf
                  asdf
                  asdf
                  asdfasdf
                  
                  sdfasdfasdf
                  `,
                  contentHTML: `<div>asdfasdfasdfasdf<br><br></div><ul><li>sdfasdf</li><li>asdf</li><li>asdf</li><li>asdf</li></ul><div><a href="http://asdfasdf">asdfasdf</a></div><div><br>sdfas<strong>dfasdf</strong></div>`,
                  children: [
                     {
                        children: [],
                        id: 'df33ea79-6532-44db-966a-e50fefdf7205',
                        title: '分支主题 1',
                        imgUrls: [
                           '/resources/fb96c55c1fee109385d12ae0f8a1630312240654bf936e7c1f56dc4366db1445.svg',
                        ],
                        content: `asdfasdfasdfasdf

                         sdfasdf
                         asdf
                         asdf
                         asdf
                         asdfasdf
                         
                         sdfasdfasdf
                         `,
                        contentHTML: `<div>asdfasdfasdfasdf<br><br></div><ul><li>sdfasdf</li><li>asdf</li><li>asdf</li><li>asdf</li></ul><div><a href="http://asdfasdf">asdfasdf</a></div><div><br>sdfas<strong>dfasdf</strong></div>`,
                     },
                     {
                        children: [
                           {
                              children: [],
                              id: '76dd5dc1-b063-4671-b320-264817cf08b0',
                              title: '子主题 1',
                           },
                           {
                              children: [],
                              id: '7f89b01d-0ea6-41ac-b03f-1f6a288d4579',
                              title: '子主题 2',
                           },
                        ],
                        id: 'e4f67763-0c0f-40bb-9622-47a9b2c0cdda',
                        title: '分支主题 3',
                     },
                     {
                        children: [],
                        id: 'f0846f61-7b67-40eb-932a-7f29d1d81174',
                        title: '分支主题 3',
                     },
                     {
                        children: [],
                        id: '4e26e5f9-b301-48cd-8769-7353e1bbd592',
                        title: '分支主题 4',
                     },
                  ],
               },
            ]}
         />
         <Script src='/impress-scripts.js'></Script>
      </>
   )
}
