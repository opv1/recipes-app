import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchRecipes } from '../store/actions/appActions'
import styles from '../styles/form.module.scss'

const Form = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.app)
  const [form, setForm] = useState({ query: '', quantity: '1' })

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onSearchRecipes = (event) => {
    event.preventDefault()
    dispatch(searchRecipes(form))
  }

  return (
    <form className={styles.form}>
      <input
        className={styles.form__input}
        onChange={handlerChange}
        type='text'
        name='query'
        value={form.query}
        placeholder='Suggest possible recipe names'
      />
      <input
        className={styles.form__input}
        onChange={handlerChange}
        type='number'
        name='quantity'
        value={form.quantity}
        min='1'
        max='25'
        placeholder='Quantity'
        required
      />
      <button
        className={styles.form__button}
        onClick={onSearchRecipes}
        disabled={!form.query || loading}
      >
        Search
      </button>
    </form>
  )
}

export default Form
