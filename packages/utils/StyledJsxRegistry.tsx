'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { createStyleRegistry, StyleRegistry } from 'styled-jsx'

type ChildProps = { children: React.ReactNode }

export function useStyledJsxRegistry() {
   const [jsxStyleRegistry] = useState(() => createStyleRegistry())

   function styledJsxFlushEffect() {
      const styles = jsxStyleRegistry.styles()
      jsxStyleRegistry.flush()
      return <>{styles}</>
   }

   function StyledJsxRegistry({ children }: ChildProps) {
      return (
         <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
      )
   }

   return [StyledJsxRegistry, styledJsxFlushEffect] as const
}

export default function StyledJsxRegistry({
   children,
}: {
   children: React.ReactNode
}) {
   const [StyledJsxRegistry, styledJsxFlushEffect] = useStyledJsxRegistry()

   useServerInsertedHTML(() => {
      return <>{styledJsxFlushEffect()}</>
   })

   return <StyledJsxRegistry>{children}</StyledJsxRegistry>
}
