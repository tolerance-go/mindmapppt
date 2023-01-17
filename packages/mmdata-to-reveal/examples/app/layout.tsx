import StyledJsxRegistry from '@mindmapppt/utils/StyledJsxRegistry'
import '../../revealStyleSheets'

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
