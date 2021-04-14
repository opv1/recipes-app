import React from 'react'
import { useTypeSelector } from 'hooks/useTypeSelector'
import Main from 'components/Main'
import List from 'components/List'
import Message from 'components/Message'

const Favorites: React.FC = () => {
  const { favoriteRecipes } = useTypeSelector((state) => state.app)

  return (
    <Main
      page={'Favorites'}
      keywords='favorite recipes'
      title='favorite recipes'
    >
      {favoriteRecipes.length !== 0 ? (
        <List recipes={favoriteRecipes} row={true} />
      ) : (
        <Message message={'No favorite recipes yet'} />
      )}
    </Main>
  )
}

export default Favorites
