import { NextPage } from 'next'
import styles from 'styles/error.module.scss'

const Custom500: NextPage = () => {
  return (
    <div className={styles.error}>
      <h1>Error | 500</h1>
    </div>
  )
}

export default Custom500
