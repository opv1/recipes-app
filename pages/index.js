import { useState } from 'react'
import MainComponent from '../components/main'
import RecipeComponent from '../components/recipe'
import { requestFetch } from '../utils/requestFetch'

const getRandomRecipe = async () => {
  const res = await requestFetch(`https://api.spoonacular.com/recipes/random?`)

  return res.recipes[0]
}

const HomePage = ({ data }) => {
  const [currentRecipe, setCurrentRecipe] = useState(data)

  const handlerClick = async () => {
    const data = await getRandomRecipe()
    setCurrentRecipe(data)
  }

  return (
    <MainComponent page={'Home'}>
      <h1>Random Recipe</h1>
      <RecipeComponent recipe={currentRecipe} />
      <button onClick={handlerClick}>Refresh</button>
    </MainComponent>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const data = await getRandomRecipe()

  return { props: { data } }
}
