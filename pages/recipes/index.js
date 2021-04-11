import { useState } from 'react'
import Main from '../../components/main'
import List from '../../components/list'
import Recipe from '../../components/recipe'
import { requestFetch } from '../../utils/requestFetch'

const getRecipes = async (number) => {
  const res = await requestFetch(
    `https://api.spoonacular.com/recipes/random?number=${number}&`
  )
  return res.recipes
}

const RecipesPage = ({ data }) => {
  const [recipes, setRecipes] = useState(data)
  const [limit] = useState(5)

  const newRecipes = async () => {
    const data = await getRecipes(limit)
    setRecipes((prev) => [...prev, ...data])
  }

  return (
    <Main page={'List'} keywords='recipe list' title='recipe list'>
      <List>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} data={recipe} />
        ))}
      </List>
    </Main>
  )
}

export default RecipesPage

export async function getStaticProps(context) {
  const data = await getRecipes(5)
  return { props: { data } }
}
