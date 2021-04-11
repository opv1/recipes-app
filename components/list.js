import styles from '../styles/list.module.scss'

const List = ({ row, children }) => {
  return (
    <ul className={styles.list} style={row && { flexDirection: 'row' }}>
      {children}
    </ul>
  )
}

export default List
