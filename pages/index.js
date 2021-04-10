import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../store/actionCreators/app'
import MainComponent from '../components/main'
import RecipeComponent from '../components/recipe'
import { requestFetch } from '../utils/requestFetch'
import styles from '../styles/main.module.scss'

const getRandomRecipe = async () => {
  try {
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/random?`
    )
    return data.recipes[0]
  } catch (err) {
    console.log(err)
  }
}

const HomePage = ({ data }) => {
  const dispatch = useDispatch()
  const [currentRecipe, setCurrentRecipe] = useState(data)

  const refreshRecipe = async () => {
    try {
      dispatch(setLoading())

      const data = await getRandomRecipe()
      setCurrentRecipe(data)
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(setLoading())
    }
  }

  return (
    <MainComponent page={'Home'} keywords='Random Recipe'>
      <div className={styles.main__container}>
        <h1 className={styles.main__title}>Random Recipe</h1>
        <RecipeComponent data={currentRecipe} />
        <button className={styles.main__button} onClick={refreshRecipe}>
          Refresh
        </button>
      </div>
    </MainComponent>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const data = await getRandomRecipe()
  return { props: { data } }
}
