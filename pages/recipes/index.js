import { useState } from 'react'
import MainComponent from '../../components/main'
import RecipeComponent from '../../components/recipe'
import { requestFetch } from '../../utils/requestFetch'

const RecipesPage = ({ data }) => {
  const [recipes, setRecipes] = useState(data)

  return (
    <MainComponent page={'Recipes'}>
      <h1>Recipe List</h1>
      <div>
        {recipes.map((recipe) => (
          <RecipeComponent key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </MainComponent>
  )
}

export default RecipesPage

export async function getStaticProps(context) {
  const res = await requestFetch(
    'https://api.spoonacular.com/recipes/random?number=5&'
  )

  return { props: { data: res.recipes } }
}
