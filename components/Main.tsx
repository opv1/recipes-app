import React from 'react'
import Head from 'next/head'
import { useTypeSelector } from 'hooks/useTypeSelector'
import Header from 'components/Header'
import Sidedrawer from 'components/Sidedrawer'
import { IMainProps } from 'interfaces'
import styles from 'styles/main.module.scss'

const Main: React.FC<IMainProps> = ({ page, keywords, title, children }) => {
  const { sidedrawer } = useTypeSelector((state) => state.app)

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='The only food API you will ever need'
        />
        <meta name='keywords' content={keywords} />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Lobster&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
        />
        <title>Recipes | {page}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.main__container}>
          <h1 className={styles.main__title}>{title}</h1>
          {children}
        </section>
      </main>
      {sidedrawer && <Sidedrawer />}
    </>
  )
}

export default Main
