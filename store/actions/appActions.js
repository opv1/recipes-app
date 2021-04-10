import { store } from '../index'
import {
  setFavorites,
  setFoundRecipes,
  setLoading,
} from '../actionCreators/app'
import { setStorage } from '../../utils/localStorage'
import { requestFetch } from '../../utils/requestFetch'

export const favoritesRecipes = (recipes) => (dispatch) => {
  dispatch(setFavorites(recipes))
}

export const addFavorite = (recipe) => (dispatch) => {
  const { favorites } = store.getState().app

  const recipes = [...favorites, recipe]

  setStorage(recipes)

  dispatch(setFavorites(recipes))
}

export const deleteFavorite = (recipe) => (dispatch) => {
  const { favorites } = store.getState().app

  const recipes = favorites.filter((r) => r.id !== recipe.id)

  setStorage(recipes)

  dispatch(setFavorites(recipes))
}

export const searchRecipes = (form) => async (dispatch) => {
  try {
    dispatch(setLoading())

    const result = await requestFetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=${form.quantity}&query=${form.query}&`
    )

    const processArray = async (result) => {
      const recipes = []

      for (const item of result) {
        const recipe = await requestFetch(
          `https://api.spoonacular.com/recipes/${item.id}/information?`
        )

        recipes.push(recipe)
      }

      dispatch(setFoundRecipes(recipes))
      dispatch(setLoading())
    }

    processArray(result)
  } catch (err) {
    console.log(err)
  }
}
