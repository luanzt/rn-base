import * as Actions from '../actions'
import * as Endpoints from '@/services/endpoints'
import { AxiosRequestConfig } from 'axios'

type ParamSearch = {
  q: string
}

type ParamDetailVideo = {
  part: string
  id: string
}

export const searchingVideo = (paramSearch: ParamSearch) => ({
  types: [
    Actions.SEARCHING_VIDEO,
    Actions.SEARCHING_VIDEO_SUCCESS,
    Actions.SEARCHING_VIDEO_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.search,
      params: { ...paramSearch, part: 'snippet' }
    } as AxiosRequestConfig
  }
})

export const videoDetail = (param: ParamDetailVideo) => ({
  types: [
    Actions.GET_VIDEO_DETAIL,
    Actions.GET_VIDEO_DETAIL_SUCCESS,
    Actions.GET_VIDEO_DETAIL_ERROR
  ],
  payload: {
    request: {
      method: 'GET',
      url: Endpoints.video,
      params: param
    } as AxiosRequestConfig
  }
})
