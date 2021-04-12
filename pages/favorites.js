import { useSelector } from 'react-redux'
import Main from '../components/main'
import List from '../components/list'
import Recipe from '../components/recipe'
import Message from '../components/message'

const Favorites = () => {
  const { favoriteRecipes } = useSelector((state) => state.app)

  return (
    <Main
      page={'Favorites'}
      keywords='favorite recipes'
      title='favorite recipes'
    >
      {favoriteRecipes.length !== 0 ? (
        <List row={true}>
          {favoriteRecipes.map((recipe) => (
            <Recipe key={recipe.id} data={recipe} />
          ))}
        </List>
      ) : (
        <Message message={'No favorite recipes yet'} />
      )}
    </Main>
  )
}

export default Favorites
