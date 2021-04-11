import { useSelector } from 'react-redux'
import Main from '../components/main'
import Form from '../components/form'
import List from '../components/list'
import Loader from '../components/loader'
import Recipe from '../components/recipe'

const Search = () => {
  const { loading, foundRecipes } = useSelector((state) => state.app)

  return (
    <Main
      page={'Search'}
      keywords='search for recipes'
      title='search for recipes'
    >
      <Form />
      {loading ? (
        <Loader />
      ) : (
        <>
          {foundRecipes.length !== 0 ? (
            <List row={true}>
              {foundRecipes.map((recipe) => {
                return <Recipe key={recipe.id} data={recipe} />
              })}
            </List>
          ) : null}
        </>
      )}
    </Main>
  )
}

export default Search