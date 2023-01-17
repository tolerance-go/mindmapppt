import { Button } from 'components/Button'

const CardItem = () => {
   return (
      <div className='flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl'>
         <div className='p-5'>
            <p className='mb-2 font-bold'>应用1</p>
            <p className='text-sm leading-5 text-gray-900'>
               啊善良的风景阿斯顿发链接啊善良的风景阿里是对肌肤
            </p>
            <div className='flex justify-end mt-5'>
               <div className='grid grid-cols-1 gap-2'>
                  <Button size='small'>预览</Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default function AdminPage() {
   return (
      <>
         <header className='p-4 bg-gray-800 text-gray-100'>
            <div className='max-auto max-w-screen-xl flex justify-between h-16 mx-auto'>
               <ul className='items-stretch space-x-3 flex'>
                  <li className='flex'>
                     <a
                        rel='noopener noreferrer'
                        href='#'
                        className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-white border-blue-400'
                     >
                        我的应用
                     </a>
                  </li>
               </ul>
               <div className='flex items-center space-x-2 md:space-x-4'>
                  <div className='relative'>
                     <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button
                           type='submit'
                           title='Search'
                           className='p-1 focus:outline-none focus:ring'
                        >
                           <svg
                              fill='currentColor'
                              viewBox='0 0 512 512'
                              className='w-4 h-4 text-gray-100'
                           >
                              <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
                           </svg>
                        </button>
                     </span>
                     <input
                        type='search'
                        name='Search'
                        placeholder='搜索...'
                        className='w-32 pr-2 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-800 text-gray-100 focus:bg-gray-900'
                     />
                  </div>
                  <Button>新建</Button>
               </div>
            </div>
         </header>

         <div className='bg-gray-100 min-h-screen'>
            <div className='relative px-4 xl:px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
               <div className='absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0'>
                  <svg
                     viewBox='0 0 88 88'
                     className='w-full max-w-screen-xl text-indigo-100'
                  >
                     <circle fill='currentColor' cx='44' cy='44' r='15.5' />
                     <circle
                        fillOpacity='0.2'
                        fill='currentColor'
                        cx='44'
                        cy='44'
                        r='44'
                     />
                     <circle
                        fillOpacity='0.2'
                        fill='currentColor'
                        cx='44'
                        cy='44'
                        r='37.5'
                     />
                     <circle
                        fillOpacity='0.3'
                        fill='currentColor'
                        cx='44'
                        cy='44'
                        r='29.5'
                     />
                     <circle
                        fillOpacity='0.3'
                        fill='currentColor'
                        cx='44'
                        cy='44'
                        r='22.5'
                     />
                  </svg>
               </div>
               <div className='relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                  {[{ key: '1' }, { key: '2' }].map((item) => {
                     return <CardItem key={item.key}></CardItem>
                  })}
               </div>
            </div>
         </div>
      </>
   )
}
