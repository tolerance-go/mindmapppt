import { Button } from 'components/Button'
import { Footer } from 'components/Footer'
import { NavBar } from 'components/Navbar'
import Link from 'next/link'

const Home = () => {
   return (
      <>
         <NavBar />
         <section className='relative md:mt-20 px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full'>
            <div className='max-w-xl mx-auto lg:max-w-screen-xl'>
               <div className='mb-16 lg:max-w-lg lg:mb-0'>
                  <div className='max-w-xl mb-6'>
                     <h2 className='max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900'>
                        <span className=''>又快又好，</span>
                        <br className='md:hidden' />
                        制作在线的 PPT{' '}
                        <span className='inline-block text-blue-700'>
                           用画好的脑图一键生成
                        </span>
                     </h2>
                     <p className='text-base text-gray-700 md:text-lg'>
                        注重内容的你是否被 PPT
                        的制作消耗了大量时间，如果这些时间被用在内容创作和筹备，想必结局又是一番不一样的景象了
                     </p>
                  </div>
                  <div className='flex items-center'>
                     <Link href='/playground'>
                        <Button size='large'>开始制作</Button>
                     </Link>
                     <Link
                        href='#'
                        // className='ml-7 sm:ml-10 text-black hover:underline hover:cursor-pointer underline-offset-4'
                        className='ml-7 sm:ml-10 hover:underline underline-offset-4 text-gray-300 cursor-not-allowed'
                     >
                        应用管理
                     </Link>
                  </div>
               </div>
            </div>
            <div className='flex justify-center h-full overflow-hidden lg:w-1/2 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-4 lg:items-end'>
               <img
                  src='/banner.jpg'
                  className='object-cover object-top w-full h-64 max-w-xl -mb-4 rounded shadow-2xl lg:ml-64 xl:ml-12 lg:h-auto lg:max-w-screen-md'
                  alt=''
               />
            </div>
         </section>
         <div className='bg-gray-50 pb-10'>
            <section className='py-24 px-4 mx-auto max-w-7xl xl:px-0'>
               <h2 className='mb-2 text-3xl font-extrabold leading-tight text-gray-900'>
                  案例演示
               </h2>
               <p className='mb-16 text-lg text-gray-500'>来自真实玩家的分享</p>
               <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                  <div>
                     <a
                        href='/playground-impress/demo-yangshengdeshiwu'
                        target={'_blank'}
                     >
                        <img
                           src='/yangshengdeshiwu-3d.jpg'
                           className='object-cover w-full h-56 mb-5 bg-center rounded'
                           alt='yangshengdeshiwu-3d.jpg'
                        />
                     </a>
                     <h2 className='mb-2 text-lg font-semibold text-gray-900'>
                        <a
                           href='/playground-impress/demo-yangshengdeshiwu'
                           target={'_blank'}
                           className='text-gray-900 hover:text-blue-600'
                        >
                           《养生的食物》 - 3D 树
                        </a>
                     </h2>
                     <p className='mb-3 text-sm font-normal text-gray-500'>
                        <a
                           target={'_blank'}
                           href='https://xmind.app/share/xuan333/'
                           className='font-medium text-gray-900 hover:text-blue-600'
                           rel='noreferrer'
                        >
                           xuan333
                        </a>{' '}
                        • 4月 15, 2022
                     </p>
                  </div>
                  <div>
                     <a
                        href='/playground-reveal/demo-yangshengdeshiwu'
                        target={'_blank'}
                     >
                        <img
                           src='/yangshengdeshiwu-pubuliu.jpg'
                           className='object-cover w-full h-56 mb-5 bg-center rounded'
                           alt='yangshengdeshiwu-pubuliu.jpg'
                        />
                     </a>
                     <h2 className='mb-2 text-lg font-semibold text-gray-900'>
                        <a
                           href='/playground-reveal/demo-yangshengdeshiwu'
                           target={'_blank'}
                           className='text-gray-900 hover:text-blue-600'
                        >
                           《养生的食物》 - 瀑布流
                        </a>
                     </h2>
                     <p className='mb-3 text-sm font-normal text-gray-500'>
                        <a
                           target={'_blank'}
                           href='https://xmind.app/share/xuan333/'
                           className='font-medium text-gray-900 hover:text-blue-600'
                           rel='noreferrer'
                        >
                           xuan333
                        </a>{' '}
                        • 4月 15, 2022
                     </p>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </>
   )
}

export default Home
