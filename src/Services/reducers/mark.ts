import * as Actions from '../actions'

export interface MLState {}

export const defaultState: MLState = {}

export const mark = (state = defaultState, action: any): MLState => {
  switch (action.type) {
    case Actions.MARK_SUCCESS:
      return { ...state }

    default:
      return state
  }
}

export default mark
