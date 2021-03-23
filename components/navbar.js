import LinkComponent from './link'
import styles from '../styles/navbar.module.scss'

const NavbarComponent = () => {
  return (
    <nav className={styles.navbar}>
      <LinkComponent href='/' text='Home' />
      <LinkComponent href='/recipes' text='Recipes' />
    </nav>
  )
}

export default NavbarComponent
