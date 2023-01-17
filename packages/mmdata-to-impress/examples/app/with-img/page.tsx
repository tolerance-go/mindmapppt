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
               },
            ]}
         />
         <Script src='/impress-scripts.js'></Script>
      </>
   )
}
