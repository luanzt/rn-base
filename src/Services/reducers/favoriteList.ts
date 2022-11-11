import { MovieState } from '@/Type'
import * as Actions from '../actions'

export interface FavoriteState {
  results: Array<MovieState>
}

export const defaultState: FavoriteState = {
  results: []
}

export const favoriteList = (
  state = defaultState,
  action: any
): FavoriteState => {
  switch (action.type) {
    case Actions.FAVORITELIST_SUCCESS:
      const { results } = action.payload
      return { ...state, results: [...results] }
    case Actions.MARK_ADD:
      const item = action.item
      state.results.push(item)
      return { ...state, results: [...state.results] }
    case Actions.MARK_REMOVE:
      const position = action.position
      state.results.splice(position, 1)
      return { ...state, results: [...state.results] }
    default:
      return state
  }
}

export default favoriteList
