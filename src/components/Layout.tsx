import { Footer } from './Footer'
import { Header } from './Header'
import { MetaHead } from './MetaHead'
import { Container } from '@components/Container'

export const Layout = ({ children, className }: any) => {
  return (
    <div>
      <MetaHead />
      <Header />
      <Container className={className}>
        <div className="max-w-full mx-auto px-4 sm:px-6 sm:py-2">{children}</div>
      </Container>
      <Footer />
    </div>
  )
}
