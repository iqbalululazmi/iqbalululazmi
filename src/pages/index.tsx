import { Container } from '@components/Container'
import { Divider } from '@components/Divider'
import { Layout } from '@components/Layout'
import Image from 'next/image'
import { ArrowCircleRightIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <>
      <Layout className="bg-white-young">
        <section id="banner" className="my-4">
          <div className="px-10 h-80 w-full bg-white-pure rounded-2xl flex flex-row justify-between">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-coolGray-900">
                <span className="text-primary">.</span>Simple{' '}
                <span className="text-primary">.</span>Clean <span className="text-primary">.</span>
                Friendly
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
            <div className="card flex-none flex flex-col w-80 h-96 bg-white-pure rounded-2xl">
              <div className="h-20">
                <div className="w-full flex flex-row justify-between px-4 pt-4">
                  <h2 className="font-semibold text-2xl">Goodwork App Design</h2>
                  <div className="h-8 flex flex-col place-content-center">
                    <ArrowCircleRightIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="w-full px-4 my-1">
                  <p className="text-sm text-gray-400 font-semibold">#UI #UX #Design</p>
                </div>
              </div>
              <div className="flex-grow p-4">
                <div className=" flex flex-col place-content-center bg-white-snow text-center p-2 rounded-2xl">
                  <Image
                    src="/images/portofolio/goodwork.svg"
                    width="220"
                    height="260"
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
            <div className="card flex-grow flex flex-row h-96 bg-white-pure rounded-2xl">
              <div className="w-60 h-full p-4 flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-2xl">FEB UMJ Digital System</h2>
                  <div className="w-full my-1">
                    <p className="text-sm text-gray-400 font-semibold">#UI #UX #Design</p>
                  </div>
                  <div className="my-1">
                    <p className="text-sm">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="rounded-xl w-full px-3 text-sm border p-2 bg-primary text-white-pure flex flow-row justify-between place-content-center align-middle"
                  >
                    <div className="h-5 flex flex-col place-content-center">
                      <span>Show Detail</span>
                    </div>
                    <ArrowCircleRightIcon className="h-5 w-5 text-white-pure" />
                  </button>
                </div>
              </div>
              <div className="flex-grow flex flex-row justify-center bg-white-snow p-4 m-4 rounded-xl">
                <div>
                  <Image
                    src="/images/portofolio/febumj-desktop.svg"
                    width="520"
                    height="320"
                    alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image
                    src="/images/portofolio/febumj-mobile.svg"
                    width="180"
                    height="320"
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Container className="">
        <section id="quote" className="h-80 my-4 bg-white-pure">
          <div className="flex flex-row gap-10 my-6 mx-14 p-4">
            <div className="w-80 h-full">
              <div className=" transform -rotate-12">
                <Image
                  src="/images/iqbal.jpeg"
                  width="260"
                  height="260"
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="flex-grow">
              <div className="relative top-12 transform -rotate-6 bg-sky-200 h-48 rounded-2xl"></div>
              <div className=" transform -rotate-1 bg-white-pure h-48 rounded-2xl border border-gray-300 -mt-36 py-4 px-16">
                <div className="border border-blueGray-300 h-full w-full rounded-2xl p-4">
                  <div className="flex flex-row justify-end">
                    <h1 className="font-bold text-4xl text-primary">&quot; &quot;</h1>
                  </div>
                  <p className="text-gray-500">
                    Desain minimalis merupakan lambang kesederhanan dalam melihat sebuah seni tanpa
                    harus mengeluarkan tenaga lebih.
                  </p>
                  <h5 className="font-semibold mt-3">Iqbal Ulul Azmi</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Divider />
      <Container className="">
        <section id="blog" className="h-blog my-4 p-6 bg-white-pure">
          <div className="bg-white-blog w-full h-full rounded-2xl">
            <div className="w-full text-center py-10 flex flex-row justify-center gap-5 align-middle">
              <span className="text-2xl font-semibold text-gray-600">x</span>{' '}
              <h1 className="text-5xl font-bold text-blueGray-800">Blog Terbaru</h1>{' '}
              <span className="text-2xl font-semibold text-gray-600">x</span>
            </div>
            <div className="flex flex-row h-post gap-5 p-10">
              <div className="flex-1 bg-white-pure">post</div>
              <div className="flex-1 bg-white-pure">post</div>
              <div className="flex-1 bg-white-pure">post</div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
