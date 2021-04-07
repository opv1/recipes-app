import Link from 'next/link'
import ActiveLink from './link'
import styles from '../styles/header.module.scss'

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.header__brand}>Recipes</a>
      </Link>
      <ul className={styles.header__nav}>
        <li className={styles.header__item}>
          <ActiveLink
            activeClassName={styles.header__link_active}
            href='/favorites'
          >
            <a className={styles.header__link}>Favorites</a>
          </ActiveLink>
        </li>
        <li className={styles.header__item}>
          <ActiveLink
            activeClassName={styles.header__link_active}
            href='/recipes'
          >
            <a className={styles.header__link}>Recipes</a>
          </ActiveLink>
        </li>
        <li className={styles.header__item}>
          <ActiveLink
            activeClassName={styles.header__link_active}
            href='/search'
          >
            <a className={styles.header__link}>Search</a>
          </ActiveLink>
        </li>
      </ul>
    </header>
  )
}

export default HeaderComponent
