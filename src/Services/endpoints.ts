export const HOST = 'https://api.themoviedb.org/3/'

export const requestToken = 'authentication/token/new'
export const login = 'authentication/token/validate_with_login'
export const requestSession = 'authentication/session/new'
export const genreList = 'genre/movie/list'
export const trendingList = 'trending/movie/week'
export const account = 'account'
export const favorite = (account_id: number | null) =>
  `account/${account_id}/favorite/movies`
export const mark = (account_id: number | null) =>
  `account/${account_id}/favorite`
