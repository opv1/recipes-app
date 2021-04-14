import React, { useState } from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { FormType } from 'types'
import styles from 'styles/form.module.scss'

const Form: React.FC = () => {
  const [form, setForm] = useState<FormType>({ query: '', quantity: '1' })
  const { loading } = useTypeSelector((state) => state.app)
  const { searchRecipes } = useActions()

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const onSearchRecipes = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    searchRecipes(form)
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
      />
      <button
        className={styles.form__button}
        onClick={onSearchRecipes}
        disabled={!form.query || !form.quantity || loading}
      >
        Search
      </button>
    </form>
  )
}

export default Form
