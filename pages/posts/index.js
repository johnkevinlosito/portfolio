import React from 'react'
import Head from 'next/head'
import config from '../../data/config'
import { getAllArticles } from '../../lib/devto';
import Posts from '../../components/Posts';
import MainWrapper from '../../components/MainWrapper';

const PostsPage = ({ articles }) => {

  return (
    <>
      <Head>
        <title>{`Posts | ${config.title}`}</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={config.description} />
        <meta property="og:title" content={`Posts | ${config.title}`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={`Posts | ${config.title}`} />
        <meta property="og:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`Posts | ${config.title}`} />
        <meta name="twitter:description" content={config.description} />
        <meta property="twitter:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="keywords" content={config.keyWords.join(`, `)} />
      </Head>
      <MainWrapper>
        <Posts articles={articles} />
      </MainWrapper>

    </>
  )
}



export default PostsPage

export async function getStaticProps() {
  const articles = await getAllArticles();

  return { props: { articles } };
}