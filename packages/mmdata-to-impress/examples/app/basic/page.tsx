import Script from 'next/script'
import { MMDataToImpress } from '../../../MMDataToImpress'

export default async function PlaygroundRevealPage() {
   return (
      <>
         <MMDataToImpress
            data={[
               {
                  children: [
                     {
                        children: [],
                        id: '32f34-6532-44db-966a-e50fefdf7205',
                        title: '分支主题 1',
                     },
                     {
                        children: [
                           {
                              children: [],
                              id: '345g345-b063-4671-2345-264817cf08b0',
                              title: '子主题 2-1',
                           },
                           {
                              children: [],
                              id: '456h34-0ea6-2345-b03f-1f6a288d4579',
                              title: '子主题 2-2',
                           },
                        ],
                        id: '34g3-0c0f-40bb-9622-47a9b2c0cdda',
                        title: '分支主题 2',
                     },
                     {
                        children: [
                           {
                              children: [],
                              id: 'sdf-b063-4671-b320-264817cf08b0',
                              title: '子主题 3-1',
                           },
                           {
                              children: [],
                              id: '3453-0ea6-41ac-b03f-1f6a288d4579',
                              title: '子主题 3-2',
                           },
                        ],
                        id: 'f0846f61-7b67-40eb-932a-7f29d1d81174',
                        title: '分支主题 3',
                     },
                  ],
                  id: 'b6fba32a5998f4471032b9a135',
                  title: '中心主题',
               },
            ]}
         />

         <Script src='/impress-scripts.js'></Script>
      </>
   )
}
