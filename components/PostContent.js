import moment from 'moment'
import React from 'react'
import Section from './Section'

const PostContent = ({ article }) => {
  return (
    <>
      <Section class='!p-0'>
        {article.cover_image && (
          <img
            src={article.cover_image}
            className='w-full h-full object-cover'
            alt=''
          />
        )}
      </Section>
      <Section>
        <div className='px-4 lg:px-0 max-w-screen-md mx-auto leading-relaxed'>
          <span className='font-light text-sm'>{moment(article.published_timestamp).format('MMMM DD, YYYY')}</span>
          <h1 className='text-4xl font-semibold leading-tight mb-2'>{article.title}</h1>
          <div className='article' dangerouslySetInnerHTML={{ __html: article.html }} />
          <div className='flex justify-center text-md mt-10 italic font-bold hover:underline'>
            <a href={article.url} target='_blank' rel='noreferrer' >Like this article? React or comment on Dev.to</a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PostContent
