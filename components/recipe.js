import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  addFavoriteRecipe,
  deleteFavoriteRecipe,
} from '../store/actions/appActions'
import styles from '../styles/recipe.module.scss'

const Recipe = ({ data }) => {
  const dispatch = useDispatch()
  const { favoriteRecipes } = useSelector((state) => state.app)
  const [recipe, setRecipe] = useState(data)
  const [favorite, setFavorite] = useState(false)
  const path = useRouter()
  const recipePage = new URLSearchParams(path.route).has('/recipes/[id]')

  const addInFavorite = (recipe) => {
    setFavorite(true)
    dispatch(addFavoriteRecipe(recipe))
  }

  const removeFromFavorite = (recipe) => {
    setFavorite(false)
    dispatch(deleteFavoriteRecipe(recipe))
  }

  useEffect(() => {
    favoriteRecipes.forEach((recipe) => {
      if (recipe.id === data.id) {
        setFavorite(true)
      }
    })

    setRecipe(data)
  }, [data])

  return (
    <div className={styles.recipe}>
      <div className={styles.recipe__container}>
        <Link href={`/recipes/${recipe.id}`}>
          <div className={styles.recipe__title}>
            <span>{recipe.title}</span>
          </div>
        </Link>
        <div className={styles.recipe__image}>
          <img src={recipe.image || '/noImage.jpg'} alt='image' />
          {favorite ? (
            <i
              className='fas fa-star'
              onClick={() => removeFromFavorite(recipe)}
            />
          ) : (
            <i className='far fa-star' onClick={() => addInFavorite(recipe)} />
          )}
        </div>
        {recipePage ? (
          <>
            <div className={styles.recipe__info}>
              <div>
                <i className='fas fa-stopwatch'></i>
                <span>Ready in {recipe.readyInMinutes} minutes</span>
              </div>
              <div>
                <i className='fas fa-heart'></i>
                <span>{recipe.aggregateLikes} Likes</span>
              </div>
            </div>
            {recipe.instructions ? (
              <div className={styles.recipe__instructions}>
                {/* <pre></pre> */}
                {recipe.instructions.replace(
                  /(<ol>)|(<\/ol>)|(<li>)|(<\/li>)/gi,
                  ''
                )}
              </div>
            ) : (
              <div>No Instructions</div>
            )}
            <a
              href={recipe.spoonacularSourceUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Source
            </a>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Recipe
