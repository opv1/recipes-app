import { store } from '../index'
import {
  setLoading,
  setMessage,
  setFavoriteRecipes,
  setFoundRecipes,
} from '../actionCreators/app'
import { setStorage } from '../../utils/localStorage'
import {
  getRandomRecipe,
  getRecipeList,
  getFoundRecipes,
  getRecipeInfo,
} from '../../utils/requestFetch'

export const refreshRecipe = () => async (dispatch) => {
  try {
    dispatch(setLoading())

    const data = await getRandomRecipe()

    return data
  } catch (err) {
    dispatch(setMessage(err.message))
  } finally {
    dispatch(setLoading())
  }
}

export const newRecipes = () => async (dispatch) => {
  try {
    dispatch(setLoading())

    const data = await getRecipeList(5)

    return data
  } catch (err) {
    dispatch(setMessage(err.message))
  } finally {
    dispatch(setLoading())
  }
}

export const selectedRecipes = (recipes) => (dispatch) => {
  dispatch(setFavoriteRecipes(recipes))
}

export const addFavoriteRecipe = (recipe) => (dispatch) => {
  const { favoriteRecipes } = store.getState().app

  const recipes = [...favoriteRecipes, recipe]

  setStorage(recipes)

  dispatch(setFavoriteRecipes(recipes))
}

export const deleteFavoriteRecipe = (recipe) => (dispatch) => {
  const { favoriteRecipes } = store.getState().app

  const recipes = favoriteRecipes.filter((r) => r.id !== recipe.id)

  setStorage(recipes)

  dispatch(setFavoriteRecipes(recipes))
}

export const searchRecipes = (form) => async (dispatch) => {
  try {
    dispatch(setMessage(''))
    dispatch(setLoading())

    const result = await getFoundRecipes(form)

    if (result.length === 0)
      throw new Error('No results were found for this request')

    const processArray = async (result) => {
      const recipes = []

      for (const item of result) {
        const recipe = await getRecipeInfo(item.id)
        recipes.push(recipe)
      }

      dispatch(setFoundRecipes(recipes))
      dispatch(setLoading())
    }

    processArray(result)
  } catch (err) {
    dispatch(setMessage(err.message))
    dispatch(setLoading())
  }
}
