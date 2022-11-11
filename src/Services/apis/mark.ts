import * as Actions from '../actions'
import * as Endpoints from '@/Services/endpoints'
import { AxiosRequestConfig } from 'axios'

export type MovieData = {
  media_type: string
  media_id: number | null
  favorite: boolean
}
export const deleteItem = (position: number) => ({
  type: Actions.MARK_REMOVE,
  position
})
export const addItem = (item: any): any => ({
  type: Actions.MARK_ADD,
  item
})
export const markAsFavorite = (
  account_id: number | null,
  session_id: string | null,
  isRemove: boolean,
  data: MovieData
): any => {
  return {
    types: [Actions.REQUEST_MARK, Actions.MARK_SUCCESS, Actions.MARK_ERROR],
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
