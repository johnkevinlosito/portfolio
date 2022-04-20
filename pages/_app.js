import '../styles/globals.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { DefaultSeo } from 'next-seo'
import { title, description } from '../data/config'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <DefaultSeo
        title={`${title}`}
        description={description}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://johnkevinlosito.com',
          site_name: `${title}`,
          images: [
            {
              alt: `${title}`,
              height: 600,
              url: 'https://johnkevinlosito.com/favicon.jpg',
              width: 600
            }
          ]
        }}
        twitter={{
          handle: '@johnkevinlosito',
          site: '@johnkevinlosito',
          cardType: 'summary_large_image'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.jpg',
          },
        ]}
      />
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="system">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
