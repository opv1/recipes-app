import styles from '../styles/message.module.scss'

const Message = ({ message }) => {
  return <h3 className={styles.message}>{message}</h3>
}

export default Message
