import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshRecipe } from '../store/actions/appActions'
import Main from '../components/main'
import Loader from '../components/loader'
import Recipe from '../components/recipe'
import { getRandomRecipe } from '../utils/requestFetch'

const HomePage = ({ serverData }) => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.app)
  const [currentRecipe, setCurrentRecipe] = useState(serverData)

  const onRefreshRecipe = async () => {
    const recipe = await dispatch(refreshRecipe())
    setCurrentRecipe(recipe)
  }

  return (
    <Main page={'Home'} keywords='random recipe' title='random recipe'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Recipe data={currentRecipe} />
          <button onClick={onRefreshRecipe} disabled={loading}>
            Refresh
          </button>
        </>
      )}
    </Main>
  )
}

export default HomePage

export async function getStaticProps(context) {
  const data = await getRandomRecipe()
  return { props: { serverData: data } }
}
