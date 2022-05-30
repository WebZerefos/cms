import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg'>
      <h3 className='mb-8 border-b pb-4 text-xl font-semibold text-gray-600'>
        Categories
      </h3>
      {categories.map((category) => (
        <div className='ml-4 mb-3 flex-grow cursor-pointer text-xs text-gray-500 transition duration-500 hover:text-pink-600'>
          <Link href={`/category/${category.slug}`} key={category.name}>
            <span>{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories
