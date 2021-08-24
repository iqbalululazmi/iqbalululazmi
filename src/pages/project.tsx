import { Layout } from '../components/Layout'

export default function Project() {
  return (
    <Layout isNavbarSecond={true} classLayout="hero-section h-800" className="h-full">
      <div className="px-20 h-600 w-full flex flex-row justify-between">
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-white-pure text-7xl text-center font-semibold">
            Build products that have a positive impact for everyone
          </h1>
        </div>
      </div>
    </Layout>
  )
}
