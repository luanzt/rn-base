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

export const getRequestSession = (request_token: string) => ({
  types: [
    Actions.FETCHING_SESSION,
    Actions.FETCHING_SESSION_SUCCESS,
    Actions.FETCHING_SESSION_ERROR
  ],
  payload: {
    request: {
      method: 'POST',
      data: {
        request_token: request_token
      },
      url: Endpoints.requestSession
    } as AxiosRequestConfig
  }
})

export const login = (data: LoginData): any => ({
  types: [Actions.REQUEST_LOGIN, Actions.LOGIN_SUCCESS, Actions.LOGIN_ERROR],
  payload: {
    request: {
      method: 'POST',
      url: Endpoints.login,
      data
    } as AxiosRequestConfig
  }
})

export const getAccountDetail = (session_id: string): any => ({
  types: [
    Actions.REQUEST_ACCDETAIL,
    Actions.ACCDETAIL_SUCCESS,
    Actions.ACCDETAIL_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.account,
      params: { session_id }
    } as AxiosRequestConfig
  }
})
