import '../styles/globals.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="system">
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
