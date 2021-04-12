import {
  SET_LOADING,
  SET_MESSAGE,
  SET_FAVORITE_RECIPES,
  ADD_FAVORITE_RECIPE,
  DELETE_FAVORITE_RECIPE,
  SET_FOUND_RECIPES,
} from '../types'

const initialState = {
  loading: false,
  message: '',
  favoriteRecipes: [],
  foundRecipes: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading }
    case SET_MESSAGE:
      return { ...state, message: action.payload }
    case SET_FAVORITE_RECIPES:
      return { ...state, favoriteRecipes: action.payload }
    case ADD_FAVORITE_RECIPE:
      return { ...state, favoriteRecipes: action.payload }
    case DELETE_FAVORITE_RECIPE:
      return { ...state, favoriteRecipes: action.payload }
    case SET_FOUND_RECIPES:
      return { ...state, foundRecipes: action.payload }
    default:
      return state
  }
}
