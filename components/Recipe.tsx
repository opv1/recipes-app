import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTypeSelector } from 'hooks/useTypeSelector'
import { useActions } from 'hooks/useActions'
import { IRecipeProps } from 'interfaces'
import { RecipeType } from 'types'
import styles from 'styles/recipe.module.scss'

const Recipe: React.FC<IRecipeProps> = ({ data }) => {
  const [recipe, setRecipe] = useState<RecipeType>(data)
  const [favorite, setFavorite] = useState<boolean>(false)
  const { favoriteRecipes } = useTypeSelector((state) => state.app)
  const { addFavoriteRecipe, deleteFavoriteRecipe } = useActions()
  const path = useRouter()
  const recipePage = new URLSearchParams(path.route).has('/recipes/[id]')

  const addInFavorite = (recipe: RecipeType) => {
    setFavorite(true)
    addFavoriteRecipe(recipe)
  }

  const removeFromFavorite = (recipe: RecipeType) => {
    setFavorite(false)
    deleteFavoriteRecipe(recipe)
  }

  const createMarkup = () => {
    return { __html: recipe.instructions }
  }

  useEffect(() => {
    favoriteRecipes.forEach((recipe: RecipeType) => {
      if (recipe.id === data.id) {
        setFavorite(true)
      }
    })

    setRecipe(data)
  }, [data])

  return (
    <div
      className={styles.recipe}
      style={recipePage ? { maxWidth: '700px' } : {}}
    >
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
              <div
                className={styles.recipe__instructions}
                dangerouslySetInnerHTML={createMarkup()}
              />
            ) : (
              <div className={styles.recipe__instructions}>No instructions</div>
            )}
            <a
              className={styles.recipe__source}
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
