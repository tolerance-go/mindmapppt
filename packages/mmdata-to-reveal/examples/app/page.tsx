export default async function IndexPage() {
   return (
      <div style={{ padding: 200 }}>
         <h1
            style={{
               fontSize: 32,
               fontWeight: 'bold',
            }}
         >
            mmdata-to-reveal
         </h1>
         <ul>
            <a href='/basic' target={'_blank'} rel='noreferrer'>
               <li>basic</li>
            </a>
            <a href='/with-img' target={'_blank'} rel='noreferrer'>
               <li>with-img</li>
            </a>
            <a href='/with-img-and-content' target={'_blank'} rel='noreferrer'>
               <li>with-img-and-content</li>
            </a>
         </ul>
      </div>
   )
}
