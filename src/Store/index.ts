import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '@/Services/reducers'
import * as types from '@/Services/actions'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { HOST } from '@/Services/endpoints'
import get from 'lodash/get'

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: HOST,
  responseType: 'json'
})

const apiMiddleware = {
  interceptors: {
    request: [
      {
        success: function (store: any, req: any) {
          //merge header from client and we pass manual
          const headers = Object.assign(
            {},
            get(req, 'headers.common'),
            get(req, 'reduxSourceAction.payload.request.headers')
          )
          if (get(store.getState(), 'user.token')) {
            headers.Authorization = `Token ${get(
              store.getState(),
              'user.token'
            )}`
          }
          return {
            ...req,
            headers: {
              common: headers
            }
          }
        }
      }
    ],
    response: [
      {
        success: function (store: any, res: any) {
          return Promise.resolve(res.data)
        },
        error: function (store: any, error: any) {
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
  console.log('zo')
  dispatch({
    type: types.TOKEN_EXPIRED
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
