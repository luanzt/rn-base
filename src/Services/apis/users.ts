import { Action } from '@/Type'
import {
  FETCHING_USER_INFO,
  LOGIN_ERROR,
  LOGIN_SUCESS,
  REQUEST_LOGIN
} from '../actions'
import * as Endpoints from '@/Services/endpoints'

export type LoginData = {
  email: string
  password: string
}

export const getUserInfo = (): Action => ({
  type: FETCHING_USER_INFO,
  payload: {
    request: {
      method: 'GET',
      url: '/values'
    }
  }
})

export const login = (data: LoginData): Action => ({
  type: [REQUEST_LOGIN, LOGIN_SUCESS, LOGIN_ERROR],
  payload: {
    request: {
      method: 'POST',
      url: Endpoints.login,
      data
    }
  }
})
