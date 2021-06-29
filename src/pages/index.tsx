import { Container } from '@components/Container'
import { Divider } from '@components/Divider'
import { Layout } from '@components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Layout className="bg-white-young">
        <section id="banner" className="my-4">
          <div className="px-10 h-80 w-full bg-white-pure rounded-2xl flex flex-row justify-between">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-coolGray-900">
                <span className="text-primary">.</span>Simple {' '}
                <span className="text-primary">.</span>Clean {' '}
                <span className="text-primary">.</span>Friendly
              </h1>
              <div className="my-4">
                <p>
                  <strong>Simple</strong> , karena mager bikin yang rumit - rumit jadi bikin yang
                  simple dan pake yang udah aja.
                </p>
                <p>
                  <strong>Clean</strong>, karena kebersihan adalah sebagian dari iman dan bacaan
                  hamdalah dapat memenuhi mizan.
                </p>
                <p>
                  <strong>Friendly</strong>, karena kalo franchise harus ngeluarin ongkos dulu, eh
                  tapi kalo mau bisa klik tombol di bawah.
                </p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-full w-44 h-15 border p-4 bg-primary text-white-pure"
                >
                  Play with Me
                </button>
              </div>
            </div>
            <div className="mr-10 h-full flex flex-col justify-center">
              <Image
                src="/images/undraw_feeling_proud_qne1.svg"
                width="250"
                height="250"
                alt="Picture of the author"
              />
            </div>
          </div>
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
