const currentMovies = (state = [], action) => {
  switch (action.type) {

    case 'SET_CURRENT':
      return action.movies

    default:
      return state
  }
}

export default currentMovies
