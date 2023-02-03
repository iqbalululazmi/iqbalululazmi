import { Container } from '@components/Atoms/Container'
import { Layout } from '@components/Layout/Layout'
import { SearchIcon } from '@heroicons/react/outline'

export default function Favorite() {
  return (
    <>
      <Layout isNavbarSecond={true} classLayout="bg-blueGray-800"></Layout>
      <Container className="bg-blueGray-800">
        <div className="favorite h-full">
          <div className="border border-t-0 border-blueGray-600"></div>
          <div className="px-24 mt-8 flex flex-row gap-2 text-gray-500">
            <SearchIcon className=" h-6 w-6 align-middle  text-gray-500 cursor-pointer"></SearchIcon>
            <h5 className="tab-active">Recent</h5>
            <h5 className="">Popular</h5>
            <h5 className="">Repository</h5>
            <h5 className="">Article</h5>
            <h5 className="">Video</h5>
          </div>

          <div className="flex flex-row flex-wrap h-full px-20 pt-5">
            <div className="flex-2 p-3 rounded-2xl">
              <div className="shadow border rounded-2xl ">
                <div className="flex-1 bg-white-pure p-4 rounded-2xl">
                  <div className="h-80 bg-green-blog rounded-2xl cursor-pointer"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-3 rounded-2xl">
              <div className="shadow border rounded-2xl ">
                <div className="flex-1 bg-white-pure p-4 rounded-2xl">
                  <div className="h-600 bg-green-blog rounded-2xl cursor-pointer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
