import { MetaHead } from '../Atoms/MetaHead'
import { Container } from '@components/Atoms/Container'
import { motion } from 'framer-motion'
import { Header } from '@components/Atoms/Header'
import { Footer } from '@components/Atoms/Footer'
import ScrollButton from '@components/Atoms/ScrollButton'

export const Layout = ({ children, classLayout, classContainer, isNavbarSecond }: any) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  }

  return (
    <div className={classLayout}>
      <MetaHead />
      <Header isNavbarSecond={isNavbarSecond} />
      <motion.main variants={variants} initial="hidden" animate="visible">
        <Container className={classContainer}>
          <div className="max-w-full mx-auto px-8 py-10 sm:px-6 sm:py-2">{children}</div>
        </Container>
      </motion.main>
      <Footer />
      <ScrollButton />
    </div>
  )
}
