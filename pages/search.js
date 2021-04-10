import MainComponent from '../components/main'
import Form from '../components/form'
import styles from '../styles/main.module.scss'
import { useSelector } from 'react-redux'
import RecipeComponent from '../components/recipe'
import Loader from '../components/loader'

const Search = () => {
  const { loading, foundRecipes } = useSelector((state) => state.app)

  return (
    <MainComponent page={'Search'} keywords='Search Recipes'>
      <div className={styles.main__container}>
        <Form />
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.main__result}>
            {foundRecipes.map((recipe) => {
              return <RecipeComponent key={recipe.id} data={recipe} />
            })}
          </div>
        )}
      </div>
    </MainComponent>
  )
}

export default Search
