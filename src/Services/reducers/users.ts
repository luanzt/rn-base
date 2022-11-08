import * as Actions from '../actions'
import { User } from '@/Type'

export interface UserState {
  token: string
  currentUser: User | null
  isLoading: boolean
  signing: boolean
  session_id: string | null
}

export const defaultState: UserState = {
  token: '',
  currentUser: null,
  signing: false,
  isLoading: false,
  session_id: null
}

export const user = (state = defaultState, action: any): UserState => {
  switch (action.type) {
    case Actions.REQUEST_LOGIN:
      return { ...state, signing: true }

    case Actions.LOGIN_SUCCESS:
      const { request_token } = action.payload

      return {
        ...state,
        token: request_token
      }
    case Actions.LOGIN_ERROR:
      return { ...state, signing: false }
    case Actions.FETCHING_SESSION_SUCCESS:
      const { requestSession } = action.payload
      return { ...state, session_id: requestSession }

    default:
      return state
  }
}

export default user
