import { Container } from '@components/Container'
import { Divider } from '@components/Divider'
import { Layout } from '@components/Layout'

export default function Home() {
  return (
    <>
      <Layout className="bg-white-young">
        <section id="banner" className="my-4">
          <div className="h-64 w-full bg-white-pure rounded-2xl"></div>
        </section>
        <section id="last-portofolio" className="my-4">
          <div className="flex flex-row gap-4">
            <div className="card flex-none w-52 h-64 bg-white-pure rounded-2xl"></div>
            <div className="card flex-grow h-64 bg-white-pure rounded-2xl"></div>
          </div>
        </section>
      </Layout>
      <Container className="">
        <section id="quote" className="h-64 my-4 bg-white-pure"></section>
      </Container>
      <Divider />
      <Container className="">
        <section id="blog" className="h-64 my-4 bg-white-pure"></section>
      </Container>
    </>
  )
}
