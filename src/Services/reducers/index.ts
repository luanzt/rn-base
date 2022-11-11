import { favoriteList } from './favoriteList'
import { combineReducers } from 'redux'
import * as types from '../actions'
import genreList from './genreList'
import trendingList from './trendingList'
import user from './users'

export const appReducer = combineReducers({
  user,
  genreList,
  trendingList,
  favoriteList
})

const rootReducer = (state: any, action: any) => {
  if (action.type === types.TOKEN_EXPIRED) {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
