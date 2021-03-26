import { useState } from 'react'
import MainComponent from '../../components/main'
import RecipeComponent from '../../components/recipe'
import { requestFetch } from '../../utils/requestFetch'

const RecipePage = ({ data }) => {
  const [recipe] = useState(data)

  return (
    <MainComponent page={'Recipe'}>
      <h1>Recipe Information</h1>
      <RecipeComponent data={recipe} />
    </MainComponent>
  )
}

export default RecipePage

export async function getServerSideProps({ params }) {
  const res = await requestFetch(
    `https://api.spoonacular.com/recipes/${params.id}/information?`
  )

  return { props: { data: res } }
}
