import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import config from '../data/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={config.description} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={config.title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="keywords" content={config.keyWords.join(`, `)} />
      </Head>
      <main className="antialiased">
        <Hero title={config.headline} />
        <div className="max-w-4xl mx-auto mt-16 ">
          <About headline={config.headline} description={config.authorDescription} />
        </div>

      </main>

    </>
  )
}
