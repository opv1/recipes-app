import { combineReducers } from 'redux'
import { appReducer } from 'store/reducers/appReducer'

export const rootReducer = combineReducers({
  app: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>
