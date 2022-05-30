import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import FeaturedPosts from '../sections/FeaturedPosts'
import { getPosts } from '../services'

const Home: NextPage = ({ posts }) => {
  return (
    <div className='container mx-auto mb-8 px-10'>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <FeaturedPosts />
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

//  continue 2h:56min
