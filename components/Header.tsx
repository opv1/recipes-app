import React from 'react'
import Link from 'next/link'
import Nav from 'components/Nav'
import Icon from 'components/Icon'
import styles from 'styles/header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.header__brand}>Recipes</a>
      </Link>
      <Nav className={styles.header__nav} />
      <Icon />
    </header>
  )
}

export default Header
