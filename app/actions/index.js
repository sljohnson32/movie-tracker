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

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}

export const setFavorites = (favs) => {
  return {
    type: 'SET_FAVS',
    favs
  }
}
