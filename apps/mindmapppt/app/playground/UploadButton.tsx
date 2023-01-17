'use client'

import axios, { isAxiosError } from 'axios'
import { Button } from 'components/Button'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useRef, useState } from 'react'

const Box = (props: PropsWithChildren) => {
   return (
      <div className='p-2 w-screen md:w-1/2 lg:w-1/4'>
         <div className='rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl'>
            <div className='block rounded-xl bg-white p-10'>
               {props.children}
            </div>
         </div>
      </div>
   )
}

export const UploadButton = () => {
   const input = useRef<HTMLInputElement>(null)
   const form = useRef<HTMLFormElement>(null)
   const [tempSpaceName, setTempSpaceName] = useState<string>()
   const router = useRouter()

   return (
      <>
         {tempSpaceName && (
            <div className='w-screen md:w-1/2 lg:w-1/4 px-2'>
               <div className='rounded-xl bg-gray-800 p-4 relative overflow-hidden'>
                  <span className='absolute top-0 right-0 px-7 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-400'>
                     临时
                  </span>

                  <div className='flex items-center'>
                     <div className='ml-3'>
                        <h3 className='text-lg font-medium text-white'>
                           PPT 生成成功
                        </h3>

                        <div>
                           <span className='text-xs text-gray-300'>
                              点击下方跳转预览
                           </span>
                        </div>
                     </div>
                  </div>

                  <ul className='mt-4 space-y-2'>
                     <li>
                        <a
                           target={'_blank'}
                           rel='noreferrer'
                           href={`/playground-impress/${tempSpaceName}`}
                           className='block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-600'
                        >
                           <strong className='font-medium text-white'>
                              3D 树
                           </strong>
                        </a>
                     </li>

                     <li>
                        <a
                           target={'_blank'}
                           rel='noreferrer'
                           href={`/playground-reveal/${tempSpaceName}`}
                           className='block h-full rounded-lg border border-gray-700 p-4 hover:border-blue-600'
                        >
                           <strong className='font-medium text-white'>
                              瀑布流
                           </strong>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         )}
         {tempSpaceName ? (
            <div
               className='mt-5 hover:underline cursor-pointer'
               onClick={() => {
                  input.current?.click()
               }}
            >
               重新上传
            </div>
         ) : (
            <Box>
               <div className='flex flex-col items-center space-y-2'>
                  <Button
                     className='px-10'
                     size='large'
                     onClick={() => {
                        input.current?.click()
                     }}
                  >
                     上传
                  </Button>

                  <span>
                     选择本地脑图文件，目前支持的格式仅{' '}
                     <a
                        href='https://xmind.cn/'
                        className='hover:text-blue-600'
                        target={'_blank'}
                        rel='noreferrer'
                     >
                        xmind{' '}
                        <svg
                           className='inline-block'
                           width='16'
                           height='16'
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='1.5'
                           color='currentcolor'
                           shapeRendering='geometricPrecision'
                           viewBox='0 0 24 24'
                        >
                           <path d='M7 17L17 7M7 7h10v10'></path>
                        </svg>
                     </a>
                     ，建议先将其他格式转为 xmind 再继续操作
                  </span>
               </div>
            </Box>
         )}

         <form ref={form}>
            <input
               ref={input}
               className='hidden'
               type={'file'}
               name='file'
               multiple={false}
               // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
               accept='.xmind,application/vnd.xmind.workbook'
               onChange={async () => {
                  const formData = new FormData(form.current!)

                  try {
                     const data = await axios('/api/playground-upload', {
                        method: 'POST',
                        data: formData,
                        headers: {
                           'Content-Type': 'multipart/form-data',
                        },
                     })

                     setTempSpaceName(data.data.tempSpaceName)
                  } catch (error) {
                     if (isAxiosError(error)) {
                        alert(error.response?.data.message ?? error.message)
                     } else if (error instanceof Error) {
                        alert(error.message)
                     }
                  }

                  // 重置选择，哪怕下次选择了相同的文件
                  input.current!.value = ''
               }}
            ></input>
         </form>
      </>
   )
}
