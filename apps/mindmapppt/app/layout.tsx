import StyledJsxRegistry from '@mindmapppt/utils/StyledJsxRegistry'
import '../styles/globals.css'

export default function RootLayout(props: { children: React.ReactNode }) {
   const { children } = props

   return (
      <StyledJsxRegistry>
         <html>
            <head />
            <body>{children}</body>
         </html>
      </StyledJsxRegistry>
   )
}
