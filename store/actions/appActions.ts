import { Dispatch } from 'redux'
import { store } from 'store/index'
import {
  setLoading,
  setMessage,
  setFavoriteRecipes,
  setFoundRecipes,
} from 'store/actionCreators/app'
import { setStorage } from 'utils/localStorage'
import {
  getRandomRecipe,
  getRecipeList,
  getFoundRecipes,
  getRecipeInfo,
} from 'utils/requestFetch'
import { RecipeType, FormType } from 'types'

export const refreshRecipe = () => async (dispatch: Dispatch) => {
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

export const newRecipes = () => async (dispatch: Dispatch) => {
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

export const selectedRecipes = (recipes: RecipeType[]) => (
  dispatch: Dispatch
) => {
  dispatch(setFavoriteRecipes(recipes))
}

export const addFavoriteRecipe = (recipe: RecipeType) => (
  dispatch: Dispatch
) => {
  const { favoriteRecipes } = store.getState().app

  const recipes = [...favoriteRecipes, recipe]

  setStorage(recipes)

  dispatch(setFavoriteRecipes(recipes))
}

export const deleteFavoriteRecipe = (recipe: RecipeType) => (
  dispatch: Dispatch
) => {
  const { favoriteRecipes } = store.getState().app

  const recipes = favoriteRecipes.filter((r: RecipeType) => r.id !== recipe.id)

  setStorage(recipes)

  dispatch(setFavoriteRecipes(recipes))
}

export const searchRecipes = (form: FormType) => async (dispatch: Dispatch) => {
  try {
    dispatch(setMessage(''))
    dispatch(setLoading())

    const result = await getFoundRecipes(form)

    if (result.length === 0)
      throw new Error('No results were found for this request')

    const processArray = async (result: any[]) => {
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
