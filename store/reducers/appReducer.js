import {
  SET_LOADING,
  SET_ERROR,
  SET_FAVORITES,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_FOUND_RECIPES,
} from '../types'

const initialState = {
  loading: false,
  error: '',
  favorites: [],
  foundRecipes: [],
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: !state.loading }
    case SET_ERROR:
      return { ...state, error: action.payload }
    case SET_FAVORITES:
      return { ...state, favorites: action.payload }
    case ADD_FAVORITE:
      return { ...state, favorites: action.payload }
    case DELETE_FAVORITE:
      return { ...state, favorites: action.payload }
    case SET_FOUND_RECIPES:
      return { ...state, foundRecipes: action.payload }
    default:
      return state
  }
}
