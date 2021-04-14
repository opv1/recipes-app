import { AppState, AppAction, AppActionTypes } from 'store/types'

const initialState: AppState = {
  loading: false,
  message: '',
  favoriteRecipes: [],
  foundRecipes: [],
}

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      }
    case AppActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }
    case AppActionTypes.SET_FAVORITE_RECIPES:
      return {
        ...state,
        favoriteRecipes: action.payload,
      }
    case AppActionTypes.ADD_FAVORITE_RECIPE:
      return {
        ...state,
        favoriteRecipes: action.payload,
      }
    case AppActionTypes.DELETE_FAVORITE_RECIPE:
      return {
        ...state,
        favoriteRecipes: action.payload,
      }
    case AppActionTypes.SET_FOUND_RECIPES:
      return {
        ...state,
        foundRecipes: action.payload,
      }
    default:
      return state
  }
}
