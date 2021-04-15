import { RecipeType } from 'types'

export type AppState = {
  loading: boolean
  sidedrawer: boolean
  message: string
  favoriteRecipes: RecipeType[]
  foundRecipes: RecipeType[]
}

export enum AppActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_SIDEDRAWER = 'SET_SIDEDRAWER',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_FAVORITE_RECIPES = 'SET_FAVORITE_RECIPES',
  ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE',
  DELETE_FAVORITE_RECIPE = 'DELETE_FAVORITE_RECIPE',
  SET_FOUND_RECIPES = 'SET_FOUND_RECIPES',
}

interface ISetLoading {
  type: AppActionTypes.SET_LOADING
}

interface ISetSidedrawer {
  type: AppActionTypes.SET_SIDEDRAWER
}

interface ISetMessage {
  type: AppActionTypes.SET_MESSAGE
  payload: string
}

interface ISetFavoriteRecipes {
  type: AppActionTypes.SET_FAVORITE_RECIPES
  payload: RecipeType[]
}

interface IAddFavoriteRecipe {
  type: AppActionTypes.ADD_FAVORITE_RECIPE
  payload: RecipeType[]
}

interface IDeleteFavoriteRecipe {
  type: AppActionTypes.DELETE_FAVORITE_RECIPE
  payload: RecipeType[]
}

interface ISetFoundRecipes {
  type: AppActionTypes.SET_FOUND_RECIPES
  payload: RecipeType[]
}

export type AppAction =
  | ISetLoading
  | ISetSidedrawer
  | ISetMessage
  | ISetFavoriteRecipes
  | IAddFavoriteRecipe
  | IDeleteFavoriteRecipe
  | ISetFoundRecipes
