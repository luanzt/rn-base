import { api } from '../api'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    fetchUsers: build.query<User, number>({
      query: id => `/users/${id}`
    })
  }),
  overrideExisting: false
})

export const { useLazyFetchUsersQuery } = userApi

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
