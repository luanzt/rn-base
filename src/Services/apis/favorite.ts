import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export const getList = (account_id: number, session_id: string): any => {
  return {
    types: [
      Actions.REQUEST_FAVORITELIST,
      Actions.FAVORITELIST_SUCCESS,
      Actions.FAVORITELIST_ERROR
    ],
    payload: {
      request: {
        method: 'GET',
        url: Endpoints.favorite(account_id),
        params: { session_id }
      } as AxiosRequestConfig
    }
  }
}
