import { Footer } from 'components/Footer'
import { NavBar } from 'components/Navbar'
import Link from 'next/link'
import { UploadButton } from './UploadButton'

export default function PlaygroundPage() {
   return (
      <div>
         <div className='absolute inset-x-0 top-0'>
            <NavBar />
            <div className='max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center py-4 overflow-y-auto whitespace-nowrap'>
               <Link href='/' className='text-gray-600 '>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='w-5 h-5'
                     viewBox='0 0 20 20'
                     fill='currentColor'
                  >
                     <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
               </Link>

               <span className='mx-5 text-gray-500  rtl:-scale-x-100'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='w-5 h-5'
                     viewBox='0 0 20 20'
                     fill='currentColor'
                  >
                     <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                     />
                  </svg>
               </span>

               <span className='text-blue-600'>演示</span>
            </div>
         </div>
         <div className='flex justify-center h-screen items-center flex-col'>
            <UploadButton />
         </div>
         <div className='absolute inset-x-0 bottom-0'>
            <Footer />
         </div>
      </div>
   )
}
