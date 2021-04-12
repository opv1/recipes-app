import {
  SET_LOADING,
  SET_MESSAGE,
  SET_FAVORITE_RECIPES,
  SET_FOUND_RECIPES,
} from '../types'

export const setLoading = () => ({
  type: SET_LOADING,
})

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
})

export const setFavoriteRecipes = (recipes) => ({
  type: SET_FAVORITE_RECIPES,
  payload: recipes,
})

export const setFoundRecipes = (recipes) => ({
  type: SET_FOUND_RECIPES,
  payload: recipes,
})
