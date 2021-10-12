import React from 'react'
import Section from './Section'
import moment from 'moment';
import Link from 'next/link';
import { convertCanonicalURLToRelative } from '../lib/devto';

const Posts = ({ articles }) => {
  return (
    <Section class="-mt-24">
      <div className="grid md:grid-cols-2 gap-4 ">

        {articles && articles.length > 0 ? (
          articles.map(article => (
            <Link href={`/posts/${convertCanonicalURLToRelative(article.canonical_url)}`} key={article.id}>
              <a className="w-full flex flex-col bg-white border rounded-lg overflow-hidden">
                <div className="h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                  <img src={article.cover_image ? article.cover_image : "/images/kamila-maciejewska-MVThvcFzVpA-unsplash.jpg"} loading="lazy" className="w-full h-full object-cover object-center absolute inset-0 transform hover:scale-110 transition duration-200" />
                </div>

                <div className="flex flex-col flex-1 p-4 sm:p-6">
                  <h2 className="text-gray-800 text-lg font-semibold mb-2 hover:underline">{article.title}</h2>

                  <p className="text-gray-500 mb-8">{article.description}</p>
                  <div className="flex justify-between items-center mt-auto gap-2">
                    <span className="px-2 py-1 bg-gray-600 text-gray-100 font-light text-xs rounded hover:bg-gray-500">
                      {article.tag_list.join(', ')}
                    </span>

                    <span className="font-light text-xs text-gray-500">
                      {moment(article.published_timestamp).format('Do MMMM YYYY')}
                    </span>
                  </div>

                </div>
              </a>
            </Link>
          ))) : (
          "No posts")
        }

      </div>
    </Section>
  )
}

export default Posts
