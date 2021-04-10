import {
  SET_LOADING,
  SET_ERROR,
  SET_FAVORITES,
  SET_FOUND_RECIPES,
} from '../types'

export const setLoading = () => ({
  type: SET_LOADING,
})

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
})

export const setFavorites = (recipes) => ({
  type: SET_FAVORITES,
  payload: recipes,
})

export const setFoundRecipes = (recipes) => ({
  type: SET_FOUND_RECIPES,
  payload: recipes,
})
