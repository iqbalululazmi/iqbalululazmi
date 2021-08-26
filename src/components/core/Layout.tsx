import { Footer } from './Footer'
import { Header } from './Header'
import { MetaHead } from './MetaHead'
import { Container } from '@components/core/Container'
import ScrollButton from '@components/ScrollButton'

export const Layout = ({ children, classLayout, classContainer, isNavbarSecond }: any) => {
  return (
    <div className={classLayout}>
      <MetaHead />
      <Header isNavbarSecond={isNavbarSecond} />
      <Container className={classContainer}>
        <div className="max-w-full mx-auto px-8 py-10 sm:px-6 sm:py-2">{children}</div>
      </Container>
      <Footer />
      <ScrollButton />
    </div>
  )
}
