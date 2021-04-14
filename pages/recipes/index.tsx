import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Main from 'components/Main'
import List from 'components/List'
import Loader from 'components/Loader'
import { getRecipeList } from 'utils/requestFetch'
import { IRecipesPageProps } from 'interfaces'
import { RecipeType } from 'types'

const RecipesPage: React.FC<IRecipesPageProps> = ({
  serverData,
  serverError,
}) => {
  const [recipes, setRecipes] = useState<RecipeType[]>(serverData)
  const { loading } = useTypeSelector((state) => state.app)
  const { newRecipes } = useActions()
  const router = useRouter()

  const onNewRecipes = async () => {
    const recipes = await newRecipes()
    setRecipes((prev) => [...prev, ...recipes])
  }

  useEffect(() => {
    if (serverError) {
      router.push('/error')
    }
  }, [])

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
    return { props: { serverData: [], serverError: err.message } }
  }
}
