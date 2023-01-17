export const NavBar = () => {
   return (
      <header className='text-gray-600 body-font'>
         <div className='max-w-screen-xl mx-auto flex flex-wrap p-5 xl:px-0 flex-col md:flex-row items-center'>
            <a
               className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
               href='/'
            >
               <img alt='' src='/logo.svg' className='w-8 h-8 text-white'></img>

               <span className='text-xl ml-3.5'>MindMapPPT</span>
            </a>
            {/* <nav className='md:ml-10 flex flex-wrap items-center text-base justify-center'>
          <a className='hover:text-gray-900'>联系我们</a>
       </nav> */}
            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
               {/* <a className='md:mr-6 hover:text-gray-900'>登录</a> */}
               <a className='md:mr-6 text-gray-300 hover:text-gray-300 cursor-not-allowed'>登录</a>
            </nav>
            {/* <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
               注册
               <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
               >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
               </svg>
            </button> */}

            <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 text-gray-300 cursor-not-allowed'>
               注册
               <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
               >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
               </svg>
            </button>
         </div>
      </header>
   )
}
