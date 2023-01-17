/** 当 state 存在时执行，之后不再执行 */
import { useEffect, useRef } from 'react'

export const useOnceStateExists = (fn: (...args: any[]) => any, state: any) => {
   const tag = useRef(false)

   useEffect(() => {
      if (tag.current) {
         return
      }

      if (state) {
         tag.current = true
         fn()
      }
   }, [fn, state])
}
