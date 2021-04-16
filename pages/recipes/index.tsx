import { useState } from 'react'
import { NextPage, GetStaticProps } from 'next'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Main from 'components/Main'
import List from 'components/List'
import Loader from 'components/Loader'
import { getRecipeList } from 'utils/requestFetch'
import { IRecipesPageProps } from 'interfaces'
import { RecipeType } from 'types'

const RecipesPage: NextPage<IRecipesPageProps> = ({ serverData }) => {
  const [recipes, setRecipes] = useState<RecipeType[]>(serverData)
  const { loading } = useTypeSelector((state) => state.app)
  const { newRecipes } = useActions()

  const onNewRecipes = async () => {
    const recipes = await newRecipes()
    setRecipes((prev) => [...prev, ...recipes])
  }

  return (
    <Main page={'List'} keywords='recipe list' title='recipe list'>
      <List recipes={recipes} />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', height: '80px' }}>
          <button onClick={onNewRecipes}>More recipes</button>
        </div>
      )}
    </Main>
  )
}

export default RecipesPage

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data = await getRecipeList(5)
    return { props: { serverData: data } }
  } catch (err) {
    return { props: { serverError: { statusCode: 500, msg: err.message } } }
  }
}
