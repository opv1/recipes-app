import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Main from 'components/Main'
import Recipe from 'components/Recipe'
import { getRecipeInfo } from 'utils/requestFetch'
import { IRecipePageProps } from 'interfaces'

const RecipePage: React.FC<IRecipePageProps> = ({
  serverData,
  serverError,
}) => {
  const router = useRouter()

  useEffect(() => {
    if (serverError) {
      router.push('/error')
    }
  }, [])

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
    return { props: { serverData: {}, serverError: err.message } }
  }
}
