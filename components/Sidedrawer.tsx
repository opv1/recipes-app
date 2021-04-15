import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Nav from 'components/Nav'
import styles from 'styles/sidedrawer.module.scss'

const Sidedrawer: React.FC = () => {
  const { sidedrawer } = useTypeSelector((state) => state.app)
  const { displaySidedrawer } = useActions()

  const handlerClick = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLElement
    if (eventTarget.hasAttribute('data-close')) return displaySidedrawer()
  }

  return (
    <div
      className={
        sidedrawer
          ? `${styles.sidedrawer} ${styles.sidedrawer_open}`
          : styles.sidedrawer
      }
      onClick={handlerClick}
    >
      <Nav className={styles.sidedrawer__nav} />
    </div>
  )
}

export default Sidedrawer
