import * as Actions from '../actions'

export interface MLState {}

export const defaultState: MLState = {}

export const trendingList = (state = defaultState, action: any): MLState => {
  switch (action.type) {
    case Actions.TRENDINGLIST_SUCCESS:
      return { ...state }

    default:
      return state
  }
}

export default trendingList
