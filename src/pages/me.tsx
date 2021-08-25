import { Container } from '@components/Container'
import { Layout } from '../components/Layout'
import Image from 'next/image'
import { Button } from '@components/Button'
import styles from './../styles/pages/me.module.css'

export default function Me() {
  return (
    <>
      <Layout classLayout="bg-white-young">
        <section id="banner" className="my-4">
          <div className="px-8 h-700 w-full bg-white-pure rounded-2xl flex flex-row justify-between">
            <div className="mx-10 w-500 h-full flex flex-col justify-center">
              <Image
                src="/images/avatar.jpg"
                width="597"
                height="467"
                alt="Picture of the author"
              />
            </div>
            <div className="mr-24 h-full flex-grow flex flex-col justify-center">
              <h2 className="text-blueGray-500 font-semibold text-xl mb-3">👋 Hi, My name is</h2>
              <h1 className="text-7xl mb-8 font-bold text-coolGray-900">Iqbal Ulul Azmi</h1>
              <h2 className="text-xl font-semibold text-gray-400">
                Software Developer based in Indonesia
              </h2>
              <div className="mt-4 mb-12 w-700">
                <p className="text-xl text-gray-500">
                  Membagikan cerita tentang pengalaman, pengetahuan dan opini saja, kalau anda tidak
                  setuju dengan blog saya harap di maklumi karena blog ini bukan Bumi Pertiwi yang
                  harus kita cintai
                </p>
              </div>
              <Button className="rounded-xl w-80 h-14 border p-4 bg-primary text-white-pure ">
                Explore My Work
              </Button>
            </div>
          </div>
        </section>
      </Layout>
      <Container>
        <section id="portofolio" className="h-1000 bg-blueGray-900">
          <div className="h-full w-full relative">
            <div className="text-center p-16">
              <h1 className="text-white-pure text-6xl font-bold">My Journey</h1>
            </div>
            <div className={styles.verticalLine}>
              <div
                className={`bg-green-400 ${styles.circle} ${styles.step1} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shad `}
              ></div>
              <div
                className={`bg-cyan-400 ${styles.circle} ${styles.step2} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shad `}
              ></div>
              <div
                className={`bg-rose-400 ${styles.circle} ${styles.step3} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shad `}
              ></div>
              <div
                className={`bg-orange-400 ${styles.circle} ${styles.step4} transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shad `}
              ></div>
            </div>
            <div className="px-48 flex flex-col gap-y-10 mt-4">
              <div className="flex flex-row justify-between">
                <div></div>
                <div className="w-96 h-36 p-4 rounded-2xl border-2 border-green-400">
                  <h2 className="text-white-pure">2017 - 2019</h2>
                  <h1 className="text-green-400 font-bold mb-1">Part Time Instructure | Inasaba</h1>
                  <p className="text-white-pure text-xs">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
                    dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
                    laborum.{' '}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="w-96 h-36 p-4 rounded-2xl border-2 border-cyan-400">
                  <h2 className="text-white-pure">2019 - 2020</h2>
                  <h1 className="text-cyan-400 font-bold mb-1">Software Developer | Natieva</h1>
                  <p className="text-white-pure text-xs">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
                    dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
                    laborum.{' '}
                  </p>
                </div>
                <div></div>
              </div>
              <div className="flex flex-row justify-between">
                <div></div>
                <div className="w-96 h-36 p-4 rounded-2xl border-2 border-rose-400">
                  <h2 className="text-white-pure">2020 - 2021</h2>
                  <h1 className="text-rose-400 font-bold mb-1">Freelance Developer | FEB UMJ</h1>
                  <p className="text-white-pure text-xs">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
                    dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
                    laborum.{' '}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="w-96 h-36 p-4 rounded-2xl border-2 border-orange-400">
                  <h2 className="text-white-pure">2020 - 2021</h2>
                  <h1 className="text-orange-400 font-bold mb-1">
                    Software Developer | GreatDay HR
                  </h1>
                  <p className="text-white-pure text-xs">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum
                    dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
                    laborum.{' '}
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container className="">
        <section id="quote" className="h-600 my-4 bg-white-pure">
          <div className="flex flex-row gap-10 my-6 mx-14 py-28 p-4">
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
    </>
  )
}
