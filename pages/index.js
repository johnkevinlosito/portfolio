import Head from 'next/head'
import Intro from '../components/Intro'
import config from '../data/config'
import Experience from '../components/Experience'
import Repositories from '../components/Repositories'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'

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
        <meta property="og:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.authorName} />
        <meta name="twitter:title" content={`Home | ${config.title}`} />
        <meta name="twitter:description" content={config.description} />
        <meta property="twitter:image" content="https://johnkevinlosito.com/favicon.jpg" />
        <meta name="keywords" content={config.keyWords.join(`, `)} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <main className="antialiased">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <Intro />
          <Projects />
          <Experience jobs={config.jobs} />
          <Repositories />
          <Certificates />
        </div>

      </main>

    </>
  )
}
