import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import styles from 'styles/icon.module.scss'

const Icon: React.FC = () => {
  const { sidedrawer } = useTypeSelector((state) => state.app)
  const { displaySidedrawer } = useActions()

  return (
    <div
      className={
        sidedrawer ? `${styles.icon} ${styles.icon_open}` : styles.icon
      }
      onClick={displaySidedrawer}
    >
      <div className={styles.icon__burger}></div>
    </div>
  )
}

export default Icon
