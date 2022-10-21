import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export type LoginData = {
  email: string
  password: string
}

export const getMe = (): any => ({
  types: [
    Actions.FETCHING_USER_INFO,
    Actions.FETCHING_USER_INFO_SUCCESS,
    Actions.FETCHING_USER_INFO_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.getMe
    } as AxiosRequestConfig
  }
})

export const login = (data: LoginData): any => ({
  types: [Actions.REQUEST_LOGIN, Actions.LOGIN_SUCESS, Actions.LOGIN_ERROR],
  payload: {
    request: {
      method: 'POST',
      url: Endpoints.login,
      data
    } as AxiosRequestConfig
  }
})
