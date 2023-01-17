import StyledJsxRegistry from '@mindmapppt/utils/StyledJsxRegistry'
import '../../impressStyleSheets'

export default function PlaygroundRevealLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <StyledJsxRegistry>
         <html>
            <head />
            <body>{children}</body>
         </html>
      </StyledJsxRegistry>
   )
}
