import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/recipe.module.scss'

const RecipeComponent = ({ data }) => {
  const [recipe, setRecipe] = useState(data)
  const route = useRouter()
  const recipePage = new URLSearchParams(route.route).has('/recipes/[id]')

  useEffect(() => {
    setRecipe(data)
  }, [data])

  return (
    <div className={styles.recipe}>
      <div className={styles.recipe__container}>
        <Link href={`/recipes/${recipe.id}`}>
          <span className={styles.recipe__title}>{recipe.title}</span>
        </Link>
        <div className={styles.recipe__image}>
          <img src={recipe.image || '/noImage.jpg'} alt='image' />
        </div>
        {recipePage ? (
          <>
            <div className={styles.recipe__info}>
              <div>
                <i className='fas fa-stopwatch'></i>
                <span>ready in {recipe.readyInMinutes} minutes</span>
              </div>
              <div>
                <i className='fas fa-heart'></i>
                <span>{recipe.aggregateLikes} Likes</span>
              </div>
            </div>
            {recipe.instructions ? (
              <div className={styles.recipe__instructions}>
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

export default RecipeComponent
