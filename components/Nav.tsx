import React from 'react'
import ActiveLink from 'components/ActiveLink'
import { INavProps } from 'interfaces'
import styles from 'styles/nav.module.scss'

const Nav: React.FC<INavProps> = ({ className }) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <ActiveLink activeClassName={styles.nav__link_active} href='/recipes'>
            <a className={styles.nav__link} data-close='link'>
              List
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav__item}>
          <ActiveLink
            activeClassName={styles.nav__link_active}
            href='/favorites'
          >
            <a className={styles.nav__link} data-close='link'>
              Favorites
            </a>
          </ActiveLink>
        </li>
        <li className={styles.nav__item}>
          <ActiveLink activeClassName={styles.nav__link_active} href='/search'>
            <a className={styles.nav__link} data-close='link'>
              Search
            </a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
