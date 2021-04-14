import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import Main from 'components/Main'
import Loader from 'components/Loader'
import Recipe from 'components/Recipe'
import { getRandomRecipe } from 'utils/requestFetch'
import { IHomePageProps } from 'interfaces'
import { RecipeType } from 'types'

const HomePage: React.FC<IHomePageProps> = ({ serverData, serverError }) => {
  const [recipe, setRecipe] = useState<RecipeType>(serverData)
  const { loading } = useTypeSelector((state) => state.app)
  const { refreshRecipe } = useActions()
  const router = useRouter()

  const onRefreshRecipe = async () => {
    const recipe = await refreshRecipe()
    setRecipe(recipe)
  }

  useEffect(() => {
    if (serverError) {
      router.push('/error')
    }
  }, [])

  return (
    <Main page={'Home'} keywords='random recipe' title='random recipe'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Recipe data={recipe} />
          <button onClick={onRefreshRecipe} disabled={loading}>
            Refresh
          </button>
        </>
      )}
    </Main>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data = await getRandomRecipe()
    return { props: { serverData: data } }
  } catch (err) {
    return { props: { serverData: {}, serverError: err.message } }
  }
}
