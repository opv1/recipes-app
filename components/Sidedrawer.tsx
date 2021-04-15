import React from 'react'
import { useActions } from 'hooks/useActions'
import Nav from 'components/Nav'
import styles from 'styles/sidedrawer.module.scss'

const Sidedrawer: React.FC = () => {
  const { displaySidedrawer } = useActions()

  const handlerClick = (event: React.MouseEvent) => {
    const eventTarget = event.target as HTMLDivElement
    if (eventTarget.hasAttribute('data-close')) return displaySidedrawer()
  }

  return (
    <div
      className={styles.sidedrawer}
      data-close='sidedrawer'
      onClick={handlerClick}
    >
      <div className={styles.sidedrawer__block}>
        <Nav className={styles.sidedrawer__nav} />
      </div>
    </div>
  )
}

export default Sidedrawer
