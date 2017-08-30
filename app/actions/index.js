export const setCurrentMovies = (movies) => {
  return {
    type: 'SET_CURRENT',
    movies
  }
}

export const loginUser = (user) => {
  return {
    type: 'LOGIN_USER',
    user
  }
}
