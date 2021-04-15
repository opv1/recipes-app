import { AppAction, AppActionTypes } from 'store/types'
import { RecipeType } from 'types'

export const setLoading = (): AppAction => ({
  type: AppActionTypes.SET_LOADING,
})

export const setSidedrawer = (): AppAction => ({
  type: AppActionTypes.SET_SIDEDRAWER,
})

export const setMessage = (message: string): AppAction => ({
  type: AppActionTypes.SET_MESSAGE,
  payload: message,
})

export const setFavoriteRecipes = (recipes: RecipeType[]): AppAction => ({
  type: AppActionTypes.SET_FAVORITE_RECIPES,
  payload: recipes,
})

export const setFoundRecipes = (recipes: RecipeType[]): AppAction => ({
  type: AppActionTypes.SET_FOUND_RECIPES,
  payload: recipes,
})
