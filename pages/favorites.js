import { useSelector } from 'react-redux'
import MainComponent from '../components/main'
import RecipeComponent from '../components/recipe'
import Message from '../components/message'
import styles from '../styles/main.module.scss'

const Favorites = () => {
  const { favorites } = useSelector((state) => state.app)

  return (
    <MainComponent page={'Favorites'} keywords='Favorites Recipes'>
      <div className={styles.main__container} style={{ flexDirection: 'row' }}>
        {favorites.length !== 0 ? (
          <>
            {favorites.map((recipe) => (
              <RecipeComponent key={recipe.id} data={recipe} />
            ))}
          </>
        ) : (
          <Message message={'No favorite recipes yet'} />
        )}
      </div>
    </MainComponent>
  )
}

export default Favorites
