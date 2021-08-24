import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { Divider } from '@components/Divider'
import { Layout } from '@components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Layout classLayout="bg-white-young">
        <section id="banner" className="my-4">
          <div className="px-20 h-700 w-full bg-white-pure rounded-2xl flex flex-row justify-between">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-6xl mb-8 font-bold text-coolGray-900">
                <span className="text-primary">.</span>Simple{' '}
                <span className="text-primary">.</span>Clean <span className="text-primary">.</span>
                Friendly
              </h1>
              <div className="mt-4 mb-14">
                <p className="text-xl">
                  <strong>Simple</strong> , karena mager bikin yang rumit - rumit jadi bikin yang
                  simple dan pake yang udah aja.
                </p>
                <p className="text-xl">
                  <strong>Clean</strong>, karena kebersihan adalah sebagian dari iman dan bacaan
                  hamdalah dapat memenuhi mizan.
                </p>
                <p className="text-xl">
                  <strong>Friendly</strong>, karena kalo franchise harus ngeluarin ongkos dulu, eh
                  tapi kalo mau bisa klik tombol di bawah.
                </p>
              </div>
              <Button className="rounded-xl w-80 h-14 border p-4 bg-primary text-white-pure ">
                Play with Me
              </Button>
            </div>
            <div className="mx-10 h-full flex flex-col justify-center">
              <Image
                src="/images/undraw_feeling_proud_qne1.svg"
                width="352"
                height="352"
                alt="Picture of the author"
              />
            </div>
          </div>
        </section>
      </Layout>
      <Container>
        <section id="portofolio" className="h-1000 bg-blueGray-900">
          <div className="h-full w-full">
            <div className="text-center p-16">
              <h1 className="text-white-pure text-6xl font-bold">My Portofolio</h1>
            </div>
            <div className="w-full h-full rounded-tl-100 rounded-tr-100 bg-white-pure flex flex-row justify-between">
              <div className="mt-52 ml-16  w-32rem">
                <h1 className="text-6xl font-bold">Good things start from our mind</h1>
                <h2 className="text-3xl text-gray-400 mt-8">
                  Try to explore something that is on my mind into a product that can be useful for
                  others
                </h2>
                <div className="mt-12">
                  <Button className="rounded-xl w-500 h-14 border p-4 bg-primary text-white-pure ">
                    Explore My Work
                  </Button>
                </div>
              </div>
              <div>
                <Image
                  src="/images/porto.png"
                  width="800"
                  height="800"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Divider />
      <Container className="">
        <section id="blog" className="h-800 my-4 p-6 bg-white-pure">
          <div className="w-full h-full rounded-2xl">
            <div className="w-full text-center py-10 flex flex-row justify-center gap-5 align-middle">
              <span className="text-2xl font-semibold text-gray-600">x</span>{' '}
              <h1 className="text-5xl font-bold text-blueGray-800">Blog Terbaru</h1>{' '}
              <span className="text-2xl font-semibold text-gray-600">x</span>
            </div>
            <div className="flex flex-row h-600 gap-10 px-32 pt-5">
              <div className="flex-1 bg-white-pure p-4 rounded-2xl shadow-xl">
                <div className="h-80 bg-green-blog rounded-2xl"></div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-400">20 Juni 2020 23:29</p>
                  <h1 className="font-bold text-2xl">How to make a crazy learner</h1>
                  <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting industry. Read
                    more...
                  </p>
                </div>
              </div>
              <div className="flex-1 bg-white-pure p-4 rounded-2xl shadow-xl">
                <div className="h-80 bg-gray-blog rounded-2xl"></div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-400">20 Juni 2020 23:29</p>
                  <h1 className="font-bold text-2xl">How to make a crazy learner</h1>
                  <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting industry. Read
                    more...
                  </p>
                </div>{' '}
              </div>
              <div className="flex-1 bg-white-pure p-4 rounded-2xl shadow-xl">
                <div className="h-80 bg-indigo-blog rounded-2xl"></div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-400">20 Juni 2020 23:29</p>
                  <h1 className="font-bold text-2xl">How to make a crazy learner</h1>
                  <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting industry. Read
                    more...
                  </p>
                </div>{' '}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
