import React from 'react'
import Section from './Section'
import moment from 'moment';
import Link from 'next/link';
import { convertCanonicalURLToRelative } from '../lib/devto';

const Posts = ({ articles }) => {
  return (
    <Section>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>

        {articles && articles.length > 0 ? (
          articles.map((article, index) => (
            <Link href={`/posts/${convertCanonicalURLToRelative(article.canonical_url)}`} key={article.id}>
              <a className={`w-full flex flex-col text-gray-800 dark:text-white rounded-lg overflow-hidden shadow-lg dark:shadow-sm dark:shadow-white ${index == 0 && 'md:col-span-2'}`}>
                <div className={`h-48 ${index == 0 ? 'md:h-64' : 'md:h-44'} block overflow-hidden relative`}>
                  <img src={article.cover_image ? article.cover_image : '/images/kamila-maciejewska-MVThvcFzVpA-unsplash.jpg'} loading='lazy' className='w-full h-full object-cover object-center absolute inset-0' alt='' />
                </div>

                <div className='flex flex-col flex-1 p-4 '>
                  <span className='font-light text-xs'>
                    {moment(article.published_timestamp).format('MMMM DD, YYYY')}
                  </span>
                  <h2 className='text-lg font-semibold mb-2 hover:underline'>{article.title}</h2>

                  <p className='mb-8 break-all'>{article.description}</p>
                  <div className='flex justify-between items-center mt-auto gap-2'>
                    <span className='px-2 py-1 bg-gray-600 text-gray-100 font-light text-xs rounded hover:bg-gray-500'>
                      {article.tag_list.join(', ')}
                    </span>
                    <span className='font-light text-xs'>{article.reading_time_minutes} min read</span>

                  </div>

                </div>
              </a>
            </Link>
          ))) : (
          'No posts')
        }

      </div>
    </Section>
  )
}

export default Posts
