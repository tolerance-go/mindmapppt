import { Footer } from 'components/Footer'
import { NavBar } from 'components/Navbar'

export default function AdminLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <NavBar />
         {children}
         <Footer />
      </>
   )
}
