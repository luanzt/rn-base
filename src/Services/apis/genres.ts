import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export const getList = (): any => ({
  types: [
    Actions.REQUEST_GENRELIST,
    Actions.GENRELIST_SUCCESS,
    Actions.GENRELIST_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.genreList
    } as AxiosRequestConfig
  }
})
