const favs = (state = [], action) => {
  switch (action.type) {

    case 'SET_FAVS':
      return action.favs

    default:
      return state
  }
}

export default favs
