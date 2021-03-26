import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress
        color='#29D'
        startPosition={0.3}
        stopDelayMs={200}
        height='5'
      />
    </>
  )
}

export default MyApp
