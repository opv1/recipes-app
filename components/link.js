import Link from 'next/link'
import styles from '../styles/link.module.scss'

const LinkComponent = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}

export default LinkComponent
