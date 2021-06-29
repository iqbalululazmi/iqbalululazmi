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
        <div className="max-w-full mx-auto px-2 sm:px-4 sm:py-2">{children}</div>
      </Container>
      <Footer />
    </div>
  )
}
