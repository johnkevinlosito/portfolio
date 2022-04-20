import Head from 'next/head'
import Intro from '../components/Intro'
import { social, title } from '../data/config'
import Repositories from '../components/Repositories'
import Projects from '../components/Projects'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import MainWrapper from '../components/MainWrapper'

export default function Home() {
  return (
    <>
      <NextSeo
        canonical='https://johnkevinlosito.com'
      />
      <SocialProfileJsonLd
        type='Person'
        name='John Kevin Losito'
        url='https://johnkevinlosito.com'
        sameAs={[
          social.devto,
          social.github,
          social.twitter,
          social.linkedin
        ]}
      />
      <Head>
        {/* <title>{`Home | ${config.title}`}</title>
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
        <meta name="keywords" content={config.keyWords.join(`, `)} /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>
      <MainWrapper>
        <Intro />
        <Projects />
        <Repositories />
      </MainWrapper>

    </>
  )
}
