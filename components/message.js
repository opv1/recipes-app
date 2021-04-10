import styles from '../styles/message.module.scss'

const Message = ({ message }) => {
  return (
    <div className={styles.message}>
      <h3>{message}</h3>
    </div>
  )
}

export default Message
