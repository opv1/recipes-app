import React from 'react'
import styles from 'styles/error.module.scss'

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.error}>
      <h1>Oops! The service is not available at the moment</h1>
    </div>
  )
}

export default ErrorPage
