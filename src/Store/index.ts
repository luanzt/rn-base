import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '@/Services/reducers'
import * as types from '@/Services/actions'
import * as texts from '@/Constants/texts'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { HOST } from '@/Services/endpoints'

interface ConfigParam {
  getState: any
  dispatch: any
  getSourceAction: any
}

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: HOST,
  responseType: 'json'
})

const apiMiddleware = {
  interceptors: {
    request: [
      {
        success: function (
          { getState, dispatch, getSourceAction }: ConfigParam,
          req: any
        ) {
          return req
        },
        error: function (
          { getState, dispatch, getSourceAction }: ConfigParam,
          error: any
        ) {
          return error
        }
      }
    ],
    response: [
      {
        success: function (
          { getState, dispatch, getSourceAction }: ConfigParam,
          res: any
        ) {
          return Promise.resolve(res)
        },
        error: function (
          { getState, dispatch, getSourceAction }: ConfigParam,
          error: any
        ) {
          return Promise.reject(error)
        }
      }
    ]
  }
}

let store = createStore(
  rootReducer,
  applyMiddleware(thunk, axiosMiddleware(client, apiMiddleware))
)

const { dispatch } = store

function logout() {
  dispatch({
    type: types.TOKEN_EXPIRED
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
