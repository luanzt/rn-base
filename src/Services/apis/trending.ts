import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export const getList = (): any => {
  return {
    types: [
      Actions.REQUEST_TRENDINGLIST,
      Actions.TRENDINGLIST_SUCCESS,
      Actions.TRENDINGLIST_ERROR
    ],
    payload: {
      request: {
        method: 'GET',
        url: Endpoints.trendingList
      } as AxiosRequestConfig
    }
  }
}
