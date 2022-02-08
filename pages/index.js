import Head from 'next/head'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import config from '../data/config'
import Experience from '../components/Experience'
import Repositories from '../components/Repositories'
import Certificates from '../components/Certificates'

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home | ${config.title}`}</title>
        <link rel="icon" href="/favicon.jpg" />
        <meta name="description" content={config.description} />
        <meta property="og:title" content={`Home | ${config.title}`} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={`Home | ${config.title}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`Home | ${config.title}`} />
        <meta name="twitter:description" content={config.description} />
        <meta name="keywords" content={config.keyWords.join(`, `)} />
      </Head>
      <main className="antialiased">
        <Hero title={config.headline} />
        <div className="max-w-4xl mx-auto px-4 lg:px-0">
          <Intro headline={config.headline} description={config.authorDescription} social={config.social} skills={config.skills} />
          <Experience jobs={config.jobs} />
          <Repositories />
          <Certificates />
        </div>

      </main>

    </>
  )
}
