import { Container } from '@components/Container'
import Image from 'next/image'
import { Layout } from '../components/Layout'

export default function Project() {
  return (
    <>
      <Layout isNavbarSecond={true} classLayout="hero-section h-800" className="h-full">
        <div className="px-20 h-600 w-full flex flex-row justify-between">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-white-pure text-7xl text-center font-semibold">
              Build products that have a positive impact for everyone
            </h1>
          </div>
        </div>
      </Layout>
      <Container>
        <section id="portofolio" className="h-full bg-awesome-project">
          <div className="h-full w-full">
            <div className="text-center p-16">
              <h1 className="text-white-pure text-6xl font-bold">Awesome Projects</h1>
            </div>
            <div className="w-full h-full pb-10 py-3 rounded-tl-100 rounded-tr-100 bg-project-1">
              <div className="my-16 ml-16">
                <h1 className="text-5xl font-medium">Greatday Benefit</h1>
              </div>
              <div className="flex flex-row w-full justify-center">
                <div className="flex flex-row w-full gap-2 px-8 justify-center">
                  <div className="flex flex-col gap-2">
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629849196/benefit-home-desktop_zentu2.png"
                      width="543"
                      height="515"
                      alt="Benefit home desktop"
                    />
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629849195/benefit-payment-desktop_opaxqs.png"
                      width="543"
                      height="515"
                      alt="Benefit home desktop"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629849196/benefit-home_a1yc5c.png"
                      width="350"
                      height="877"
                      alt="Benefit home"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629849196/benefit-payment_rwbqco.png"
                      width="350"
                      height="760.67"
                      alt="Benefit payment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portofolio" className="h-full bg-project-1">
          <div className="h-full w-full">
            <div className="w-full h-full pb-10 py-3 rounded-tl-100 rounded-tr-100 bg-project-2">
              <div className="my-16 ml-16">
                <h1 className="text-5xl font-medium">FEB UMJ E-SDM</h1>
              </div>
              <div className="flex flex-row w-full justify-center">
                <div className="flex flex-row w-full gap-2 px-8 justify-center">
                  <div className="flex flex-col gap-2">
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902210/esdm-home_o2dcai.png"
                      width="545"
                      height="290"
                      alt="esdm home desktop"
                    />
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902208/esdm-struktural_pmnxqt.png"
                      width="545"
                      height="290"
                      alt="esdm home desktop"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902209/esdm-mobile-home_m4mq3v.png"
                      width="350"
                      height="700"
                      alt="esdm home"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902210/esdm-mobile-struktural_fwehjz.png"
                      width="350"
                      height="700"
                      alt="esdm payment"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portofolio" className="h-full bg-project-2">
          <div className="h-full w-full">
            <div className="w-full h-full pb-10 py-3 rounded-tl-100 rounded-tr-100 bg-project-3">
              <div className="my-16 ml-16">
                <h1 className="text-5xl font-medium text-white-young">Studi</h1>
              </div>
              <div className="flex flex-row w-full justify-center">
                <div className="flex flex-row w-full gap-2 px-8 justify-center">
                  <div className="mt-16">
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902209/studi-classroom_skjgay.png"
                      width="350"
                      height="755"
                      alt="studi"
                    />
                  </div>
                  <div>
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902208/studi-home_er5tc8.png"
                      width="350"
                      height="755"
                      alt="studi"
                    />
                  </div>
                  <div className="mt-16">
                    <Image
                      src="https://res.cloudinary.com/iqbalululazmi/image/upload/v1629902208/studi-statistic_jtfjco.png"
                      width="350"
                      height="755"
                      alt="studi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
