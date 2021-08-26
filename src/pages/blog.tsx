import { Layout } from '@components/core/Layout'
import getAllPosts from '@lib/data'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export default function Blog({ posts }: any) {
  // props post is return from getStaticProps
  return (
    <>
      <Layout classLayout="bg-white-pure border-t">
        <section id="banner" className="my-4">
          <div className="px-20 h-72 w-full bg-white-pure rounded-2xl flex flex-col justify-center text-center">
            <h1 className="text-6xl mb-8 font-bold text-coolGray-900">
              <span className="text-primary">.</span>Iqbal Ulul Azmi{' '}
              <span className="text-primary">.</span>Blog
            </h1>
            <div className="mt-4 mb-14 w-full flex justify-center">
              <p className="text-xl w-900">
                Membagikan cerita tentang pengalaman, pengetahuan dan opini saja, kalau anda tidak
                setuju dengan blog saya harap di maklumi karena blog ini bukan{' '}
                <strong>Bumi Pertiwi</strong> yang harus kita cintai
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-full">
            <div className="flex flex-row flex-wrap h-full px-20 pt-5">
              {posts.map((item: any) => (
                <BlogListItem key={item.slug} {...item} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  }
}

function BlogListItem({ slug, title, date, content }: any) {
  return (
    <Link href={`/post/${slug}`}>
      <div className="flex-3 p-3 rounded-2xl">
        <div className="shadow h-500 border rounded-2xl hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-99 hover:shad">
          <div className="flex-1 bg-white-pure p-4 rounded-2xl">
            <div className="h-80 bg-green-blog rounded-2xl cursor-pointer"></div>
            <div className="mt-4">
              <p className="font-semibold text-gray-400">
                {format(parseISO(date), 'MMMM do, uuu')}
              </p>
              <h1 className="font-bold text-lg cursor-pointer mt-3">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
