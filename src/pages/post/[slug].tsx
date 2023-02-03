import { Layout } from '@components/Layout/Layout'
import getAllPosts from '@lib/data'
import { format, parseISO } from 'date-fns'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

export default function BlogPage({ title, date, content }: any) {
  const hydratedContent = hydrate(content)

  return (
    <Layout>
      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md">{format(parseISO(date), 'MMMM do, uuu')}</div>
        </div>
        <div className="prose">{hydratedContent}</div>
      </main>
    </Layout>
  )
}

export async function getStaticProps(context: any) {
  const { params } = context
  const allPosts = getAllPosts()
  const { data, content }: any = allPosts.find((item) => item.slug === params.slug)
  const mdxSource = await renderToString(content)

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
