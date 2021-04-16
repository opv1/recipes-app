import { NextPage } from 'next'
import Link from 'next/link'
import styles from 'styles/notfound.module.scss'

const Custom404: NextPage = () => {
  return (
    <div className={styles.notfound}>
      <h1>Error | 404</h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  )
}

export default Custom404
