import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newRecipes } from '../../store/actions/appActions'
import Main from '../../components/main'
import List from '../../components/list'
import Recipe from '../../components/recipe'
import Loader from '../../components/loader'
import { getRecipeList } from '../../utils/requestFetch'

const RecipesPage = ({ serverData }) => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.app)
  const [currentRecipes, setCurrentRecipes] = useState(serverData)

  const onNewRecipes = async () => {
    const recipes = await dispatch(newRecipes())
    setCurrentRecipes((prev) => [...prev, ...recipes])
  }

  return (
    <Main page={'List'} keywords='recipe list' title='recipe list'>
      <List>
        {currentRecipes.map((recipe) => (
          <Recipe key={recipe.id} data={recipe} />
        ))}
      </List>
    </Main>
  )
}

export default RecipesPage

export async function getStaticProps(context) {
  const data = await getRecipeList(5)
  return { props: { serverData: data } }
}
