import React from 'react'
import { IMessageProps } from 'interfaces'
import styles from 'styles/message.module.scss'

const Message: React.FC<IMessageProps> = ({ message }) => {
  return <h3 className={styles.message}>{message}</h3>
}

export default Message
