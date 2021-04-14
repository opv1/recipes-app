import React from 'react'
import Link from 'next/link'
import styles from 'styles/notfound.module.scss'

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.notfound}>
      <h1>Error | 404</h1>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </div>
  )
}

export default ErrorPage
