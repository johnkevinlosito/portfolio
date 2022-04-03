import fs from "fs";
import path from "path";
import React from "react";
import Head from "next/head";
import config from "../../data/config";
import { getAllArticles, getArticleFromCache } from "../../lib/devto";
import PostContent from "../../components/PostContent";

const cacheFile = ".dev-to-cache.json";

const ArticlePage = ({ article }) => {

  return (
    <>
      <Head>
        <title>{`${article.title} | ${config.title}`}</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={article.description} />
        <meta property="og:title" content={`${article.title}`} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${config.title}`} />
        <meta
          property="og:image"
          content={
            article.cover_image
              ? article.cover_image
              : "https://johnkevinlosito.com/favicon.jpg"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`${article.title}`} />
        <meta name="twitter:description" content={article.description} />
        <meta
          name="twitter:image"
          content={
            article.cover_image
              ? article.cover_image
              : "https://johnkevinlosito.com/favicon.jpg"
          }
        />
        <meta
          name="keywords"
          content={`${article.tag_list.join(", ")}, ${config.keyWords.join(
            `, `
          )}`}
        />
      </Head>
      <main className="antialiased">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <PostContent article={article} />
        </div>
      </main>
    </>
  );
};
export async function getStaticPaths() {
  const articles = await getAllArticles();

  fs.writeFileSync(
    path.join(process.cwd(), cacheFile),
    JSON.stringify(articles)
  );

  const paths = articles.map(({ localSlug }) => {
    return {
      params: { slug: localSlug },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const cacheContents = fs.readFileSync(
    path.join(process.cwd(), cacheFile),
    "utf-8"
  );
  const cache = JSON.parse(cacheContents);

  const article = await getArticleFromCache(cache, params.slug);
  return { props: { article } };
}

export default ArticlePage;
