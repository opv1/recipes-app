import { NextPage } from 'next'
import { useTypeSelector } from 'hooks/useTypeSelector'
import Main from 'components/Main'
import Form from 'components/Form'
import Message from 'components/Message'
import List from 'components/List'
import Loader from 'components/Loader'

const Search: NextPage = () => {
  const { loading, message, foundRecipes } = useTypeSelector(
    (state) => state.app
  )

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
          {message ? (
            <Message message={message} />
          ) : (
            <>
              {foundRecipes.length !== 0 ? (
                <List recipes={foundRecipes} row={true} />
              ) : null}
            </>
          )}
        </>
      )}
    </Main>
  )
}

export default Search
