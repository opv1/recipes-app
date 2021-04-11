import { useState } from 'react'
import Main from '../../components/main'
import Recipe from '../../components/recipe'
import { requestFetch } from '../../utils/requestFetch'

const RecipePage = ({ data }) => {
  const [recipe] = useState(data)

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
  const res = await requestFetch(
    `https://api.spoonacular.com/recipes/${params.id}/information?`
  )
  return { props: { data: res } }
}
