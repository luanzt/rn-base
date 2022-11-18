import { combineReducers } from 'redux'
import * as types from '../actions'
import genreList from './genreList'
import trendingList from './trendingList'
import user from './users'
import favorite from './favorite'

export const appReducer = combineReducers({
  user,
  genreList,
  trendingList,
  favorite
})

const rootReducer = (state: any, action: any) => {
  if (action.type === types.TOKEN_EXPIRED) {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer
