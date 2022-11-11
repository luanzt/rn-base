import * as Actions from '../actions'
import { User } from '@/Type'

export interface UserState {
  token: string
  currentUser: User | null
  isLoading: boolean
  signing: boolean
  sessionId: string | null
  id: number | null
}

export const defaultState: UserState = {
  token: '',
  currentUser: null,
  signing: false,
  isLoading: false,
  sessionId: '',
  id: null
}

export const user = (state = defaultState, action: any): UserState => {
  switch (action.type) {
    case Actions.REQUEST_LOGIN:
      return { ...state, signing: true }

    case Actions.LOGIN_SUCCESS:
      const { requestToken } = action.payload

      return {
        ...state,
        token: requestToken
      }
    case Actions.LOGIN_ERROR:
      return { ...state, signing: false }
    case Actions.FETCHING_SESSION_SUCCESS:
      const { session_id } = action.payload
      return { ...state, sessionId: session_id }
    case Actions.ACCDETAIL_SUCCESS:
      const { id } = action.payload

      return { ...state, id: id }
    default:
      return state
  }
}

export default user
