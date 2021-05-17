import { useEffect, useRef, useState } from 'react'
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
  const divRef = useRef<HTMLDivElement>(null)
  const { loading } = useTypeSelector((state) => state.app)
  const { newRecipes } = useActions()

  const onNewRecipes = async () => {
    const recipes = await newRecipes()
    setRecipes((prev) => [...prev, ...recipes])
  }

  const handlerScroll = () => {
    if (divRef.current) {
      const divOffset = divRef.current.offsetTop + divRef.current.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight

      if (!loading && pageOffset > divOffset) onNewRecipes()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll)

    return () => {
      window.removeEventListener('scroll', handlerScroll)
    }
  })

  return (
    <Main page={'List'} keywords='recipe list' title='recipe list'>
      <List recipes={recipes} />
      {loading ? <Loader /> : <div ref={divRef}></div>}
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
