import { MovieState } from '@/Type'
import * as Actions from '../actions'

export interface FavoriteState {
  results: Array<MovieState>
}

export const defaultState: FavoriteState = {
  results: []
}
export const favorite = (state = defaultState, action: any): FavoriteState => {
  switch (action.type) {
    case Actions.FAVORITELIST_SUCCESS:
      const { results } = action.payload
      return { ...state, results: [...results] }
    case Actions.MARK_SUCCESS:
      const isMarkAsFavorite = action.meta?.previousAction?.isMarkAsFavorite
      const { status_code } = action.payload
      const item = action.meta?.previousAction?.item
      let currentResults = [...state.results]
      if (isMarkAsFavorite && status_code === 1) {
        currentResults.push(item)
      } else if (!isMarkAsFavorite) {
        currentResults = currentResults.filter(items => items.id !== item.id)
      }
      return { ...state, results: currentResults }
    default:
      return state
  }
}

export default favorite
