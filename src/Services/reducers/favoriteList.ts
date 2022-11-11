import * as Actions from '../actions'

export interface MLState {}

export const defaultState: MLState = {}

export const favoriteList = (state = defaultState, action: any): MLState => {
  switch (action.type) {
    case Actions.FAVORITELIST_SUCCESS:
      return { ...state }

    default:
      return state
  }
}

export default favoriteList
