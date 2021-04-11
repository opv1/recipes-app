import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../store/actionCreators/app'
import Main from '../components/main'
import Loader from '../components/loader'
import Recipe from '../components/recipe'
import { requestFetch } from '../utils/requestFetch'

const getRandomRecipe = async () => {
  try {
    const data = await requestFetch(
      `https://api.spoonacular.com/recipes/random?`
    )
    return data.recipes[0]
  } catch (err) {
    console.log(err)
  }
}

const HomePage = ({ data }) => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.app)
  const [currentRecipe, setCurrentRecipe] = useState(data)

  const refreshRecipe = async () => {
    try {
      dispatch(setLoading())

      const data = await getRandomRecipe()
      setCurrentRecipe(data)
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(setLoading())
    }
  }

  return (
    <Main page={'Home'} keywords='random recipe' title='random recipe'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Recipe data={currentRecipe} />
          <button onClick={refreshRecipe}>Refresh</button>
        </>
      )}
    </Main>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const data = await getRandomRecipe()
  return { props: { data } }
}
