import React from 'react'
import Section from './Section'

const PostContent = ({ article }) => {
  return (
    <Section class="-mt-24">
      <div className="px-4 lg:px-0 mt-8 max-w-screen-md mx-auto leading-relaxed">
        <div className="flex justify-center text-md my-4 italic font-bold hover:underline">
          <a href={article.url} target="_blank" rel="noreferrer" >Also posted on Dev.to</a>
        </div>
        <div className="article" dangerouslySetInnerHTML={{ __html: article.html }} />
        <div className="flex justify-center text-md mt-10 mb-32 italic font-bold hover:underline">
          <a href={article.url} target="_blank">Like this article? React or comment on Dev.to</a>
        </div>
      </div>
    </Section>
  )
}

export default PostContent
