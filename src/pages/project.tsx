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
            <div className="w-full h-full py-3 rounded-tl-100 rounded-tr-100 bg-project-1">
              <div className="my-10 ml-16">
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
            {/* <div className="w-full h-full rounded-tl-100 rounded-tr-100 bg-project-2 flex flex-row justify-between">
              <div className="mt-16 ml-16  w-32rem">
                <h1 className="text-5xl font-semibold">FEB UMJ E-SDM</h1>
              </div>
            </div> */}
          </div>
        </section>
      </Container>
    </>
  )
}
