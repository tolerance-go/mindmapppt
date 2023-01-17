/**
 * 这是一个监听外部事件的 useEffect
 */
import { useEffect, useRef, useState } from 'react'

export const useListenEffect = (
   fn: (...args: any[]) => any,
   depends: any[],
   options: {
      state: () => boolean | undefined
      listen: (handler: () => void) => () => void
   },
) => {
   const [count, setCount] = useState(0)
   const canExec = useRef(false)

   const ffn = useRef(fn)

   ffn.current = fn

   useEffect(() => {
      if (canExec.current || options.state()) {
         return ffn.current()
      }

      return options.listen(() => {
         canExec.current = true
         setCount((prev) => prev + 1)
      })
   }, [count, ...depends])
}
