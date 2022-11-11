import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export type MovieData = {
  media_type: string
  media_id: number | null
  favorite: boolean
}
export const markAsFavorite = (
  account_id: number | null,
  session_id: string | null,
  data: MovieData
): any => {
  return {
    types: [
      Actions.REQUEST_FAVORITELIST,
      Actions.FAVORITELIST_SUCCESS,
      Actions.FAVORITELIST_ERROR
    ],
    payload: {
      request: {
        method: 'POST',
        url: Endpoints.mark(account_id),
        params: { session_id },
        data
      } as AxiosRequestConfig
    }
  }
}
