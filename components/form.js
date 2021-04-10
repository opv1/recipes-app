import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipes } from '../store/actions/appActions'
import styles from '../styles/form.module.scss'

const Form = () => {
  const [form, setForm] = useState({ query: '', quantity: '1' })
  const dispatch = useDispatch()

  const handlerChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handlerClick = (event) => {
    event.preventDefault()
    dispatch(searchRecipes(form))
  }

  return (
    <form className={styles.form}>
      <input
        onChange={handlerChange}
        type='text'
        name='query'
        value={form.query}
        placeholder='Suggest possible recipe names'
      />
      <div className={styles.form__block}>
        <input
          onChange={handlerChange}
          type='number'
          name='quantity'
          value={form.quantity}
          min='1'
          max='25'
          placeholder='Quantity'
          required
        />
      </div>
      <button onClick={handlerClick} disabled={!form.query}>
        Search
      </button>
    </form>
  )
}

export default Form
