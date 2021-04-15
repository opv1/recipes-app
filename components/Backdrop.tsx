import React from 'react'
import { useActions } from 'hooks/useActions'
import styles from 'styles/backdrop.module.scss'

const Backdrop: React.FC = () => {
  const { displaySidedrawer } = useActions()

  return (
    <div
      className={styles.backdrop}
      onClick={displaySidedrawer}
      data-close='backdrop'
    />
  )
}

export default Backdrop
