import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import config from '../data/config'
import Portfolio from '../components/Portfolio'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>{`Portfolio | ${config.title}`}</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={config.description} />
        <meta property="og:title" content={`Portfolio | ${config.title}`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={`Portfolio | ${config.title}`} />
        <meta property="og:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`Portfolio | ${config.title}`} />
        <meta name="twitter:description" content={config.description} />
        <meta property="twitter:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="keywords" content={config.keyWords.join(`, `)} />
      </Head>
      <main className="antialiased">
        <Hero title="Portfolio" />
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Portfolio />
        </div>

      </main>

    </>
  )
}

export default PortfolioPage
