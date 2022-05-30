import React, { useEffect, useState } from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'
import Image from 'next/image'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className='mb-8 rounded-lg bg-white p-8 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold text-gray-600'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='mb-4 flex w-full items-center '>
          <div className='w-16 flex-none'>
            <Image
              unoptimized
              src={post.featuredImage.url}
              alt={post.title}
              height='60px'
              width='60px'
              className='rounded-full align-middle'
            />
          </div>
          <div className='ml-4 flex-grow text-xs text-gray-500 transition duration-500 hover:text-pink-600'>
            <p className=' '>{moment(post.createdAt).format('DD MMMM YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
