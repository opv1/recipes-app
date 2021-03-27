import Head from 'next/head'
import HeaderComponent from './header'
import styles from '../styles/main.module.scss'

const MainComponent = ({ page, keywords, children }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='The only food API you"ll ever need' />
        <meta name='keywords' content={keywords} />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossorigin='anonymous'
        />
        <title>Recipes | {page}</title>
      </Head>
      <HeaderComponent />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default MainComponent
