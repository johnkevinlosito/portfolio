import fs from 'fs';
import path from 'path';
import React from 'react'
import Head from 'next/head'
import moment from 'moment';
import Hero from '../../components/Hero';
import config from '../../data/config'
import { getAllArticles, getArticleFromCache } from '../../lib/devto';
import PostContent from '../../components/PostContent';

const cacheFile = '.dev-to-cache.json';

const ArticlePage = ({ article }) => {

  const banner = (<div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-96">
    <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }} />
    {article.cover_image && <img src={article.cover_image} className="absolute left-0 top-0 w-full h-full z-0 object-cover" alt="" />}
    <div className="p-4 absolute bottom-0 left-0 z-20">
      <span className="px-4 py-1 bg-black text-gray-200 items-center justify-center mb-2">
        {article.tag_list.join(', ')}
      </span>
      <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
        {article.title}
      </h2>
      <div className="flex mt-3">
        <p className="font-semibold text-gray-200 text-sm">
          {moment(article.published_timestamp).format('Do MMMM YYYY')}
        </p>
      </div>
    </div>
  </div>)

  return (
    <>
      <Head>
        <title>{`${article.title} | ${config.title}`}</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={article.description} />
        <meta property="og:title" content={`${article.title}`} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={`${config.title}`} />
        <meta property="og:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`${article.title}`} />
        <meta name="twitter:description" content={article.description} />
        <meta property="twitter:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="keywords" content={`${article.tag_list.join(', ')}, ${config.keyWords.join(`, `)}`} />
      </Head>
      <main className="antialiased">
        <Hero content={banner} />
        <div className="max-w-4xl mx-auto">
          <PostContent article={article} />
        </div>
      </main>

    </>

  )
}
export async function getStaticPaths() {

  const articles = await getAllArticles();

  fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(articles));

  const paths = articles.map(({ localSlug }) => {
    return {
      params: { slug: localSlug },
    }
  })

  return { paths, fallback: false }
}


export async function getStaticProps({ params }) {

  const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8');
  const cache = JSON.parse(cacheContents);

  const article = await getArticleFromCache(cache, params.slug);
  return { props: { article } }
}

export default ArticlePage;