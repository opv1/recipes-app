import NavbarComponent from './navbar'
import styles from '../styles/header.module.scss'

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <NavbarComponent />
    </header>
  )
}

export default HeaderComponent
