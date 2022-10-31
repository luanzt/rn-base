import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export type LoginData = {
  username: string
  password: string
  request_token: string
}

export const getRequestToken = (): any => ({
  type: Actions.FETCHING_REQUEST_TOKEN,
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.requestToken
    } as AxiosRequestConfig
  }
})

export const getRequestSession = (): any => ({
  types: [
    Actions.FETCHING_SESSION,
    Actions.FETCHING_SESSION_SUCCESS,
    Actions.FETCHING_SESSION_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.requestSession
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
