import React from 'react'
import Recipe from 'components/Recipe'
import { IListProps } from 'interfaces'
import { RecipeType } from 'types'
import styles from 'styles/list.module.scss'

const List: React.FC<IListProps> = ({ recipes, row }) => {
  return (
    <ul className={styles.list} style={row ? { flexDirection: 'row' } : {}}>
      {recipes.map((recipe: RecipeType) => (
        <Recipe key={recipe.id} data={recipe} />
      ))}
    </ul>
  )
}

export default List
