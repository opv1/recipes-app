import { useState } from 'react'
import MainComponent from '../../components/main'
import RecipeComponent from '../../components/recipe'
import { requestFetch } from '../../utils/requestFetch'
import styles from '../../styles/main.module.scss'

const getRecipes = async (number) => {
  const res = await requestFetch(
    `https://api.spoonacular.com/recipes/random?number=${number}&`
  )
  return res.recipes
}

const RecipesPage = ({ data }) => {
  const [recipes, setRecipes] = useState(data)
  const [limit] = useState(5)

  async function newRecipes() {
    const data = await getRecipes(limit)
    setRecipes((prev) => [...prev, ...data])
  }

  return (
    <MainComponent page={'List'} keywords='Recipe List'>
      <div className={styles.main__container}>
        <h1 className={styles.main__title}>Recipe List</h1>
        <div>
          {recipes.map((recipe) => (
            <RecipeComponent key={recipe.id} data={recipe} />
          ))}
        </div>
        {/* <button onClick={newRecipes}>More recipes</button> */}
      </div>
    </MainComponent>
  )
}

export default RecipesPage

export async function getStaticProps(context) {
  const data = await getRecipes(5)
  return { props: { data } }
}
