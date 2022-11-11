import * as Actions from '../actions'

export interface MLState {}

export const defaultState: MLState = {}

export const genresMovie = (state = defaultState, action: any): MLState => {
  switch (action.type) {
    case Actions.GENRELIST_SUCCESS:
      return { ...state }

    default:
      return state
  }
}

export default genresMovie
