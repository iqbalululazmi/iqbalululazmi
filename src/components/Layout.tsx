import { Footer } from './Footer'
import { Header } from './Header'
import { MetaHead } from './MetaHead'

export const Layout = ({ children }: any) => {
  return (
    <div>
      <MetaHead />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-4">{children}</div>
      <Footer />
    </div>
  )
}
