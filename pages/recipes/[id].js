import { useState } from 'react'
import Main from '../../components/main'
import Recipe from '../../components/recipe'
import { getRecipeInfo } from '../../utils/requestFetch'

const RecipePage = ({ serverData }) => {
  const [recipe] = useState(serverData)

  return (
    <Main
      page={'Recipe'}
      keywords='recipe information'
      title='recipe information'
    >
      <Recipe data={recipe} />
    </Main>
  )
}

export default RecipePage

export async function getServerSideProps({ params }) {
  const data = await getRecipeInfo(params.id)
  return { props: { serverData: data } }
}
