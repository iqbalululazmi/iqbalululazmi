import { Layout } from '@components/Layout'
import getAllPosts from '@lib/data'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

export default function Home({ posts }: any) {
  return (
    <Layout className="bg-white-young">
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
        <div className="shadow hover:shadow-md border hover:border-primary rounded-2xl">
          <div className="flex-1 bg-white-pure p-4 rounded-2xl">
            <div className="h-80 bg-green-blog rounded-2xl cursor-pointer"></div>
            <div className="mt-4">
              <p className="font-semibold text-gray-400">
                {format(parseISO(date), 'MMMM do, uuu')}
              </p>
              <h1 className="font-bold text-2xl cursor-pointer">{title}</h1>
              <p className="text-gray-400">{content.substr(0, 300)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
