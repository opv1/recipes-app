import { NextPage, GetServerSideProps } from 'next'
import Main from 'components/Main'
import Recipe from 'components/Recipe'
import { getRecipeInfo } from 'utils/requestFetch'
import { IRecipePageProps } from 'interfaces'

const RecipePage: NextPage<IRecipePageProps> = ({ serverData }) => {
  return (
    <Main
      page={'Recipe'}
      keywords='recipe information'
      title='recipe information'
    >
      <Recipe data={serverData} />
    </Main>
  )
}

export default RecipePage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const data = await getRecipeInfo(params!.id as string)
    return { props: { serverData: data } }
  } catch (err) {
    return { props: { serverError: { statusCode: 500, msg: err.message } } }
  }
}
