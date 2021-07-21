import { Container } from '@components/Container'
import { Layout } from '../components/Layout'
import Image from 'next/image'

export default function Me() {
  return (
    <>
      <Layout>
        <div>Me</div>
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
    </>
  )
}
