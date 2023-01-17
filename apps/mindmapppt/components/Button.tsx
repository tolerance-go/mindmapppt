import clsx from 'clsx'

export const Button = ({
   children,
   onClick,
   size = 'default',
   className,
}: React.PropsWithChildren<{
   className?: string
   size?: 'large' | 'default' | 'small'
   onClick?: React.MouseEventHandler<HTMLButtonElement>
}>) => {
   return (
      <button
         onClick={onClick}
         className={clsx(
            'font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            {
               'px-5 py-4 text-base rounded-xl lg:px-10': size === 'large',
               'px-4 py-2 text-sm rounded-lg lg:px-8': size === 'default',
               'px-3 py-1 text-sm rounded-md': size === 'small',
            },
            className,
         )}
      >
         {children}
      </button>
   )
}
