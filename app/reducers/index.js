import { combineReducers } from 'redux'
import currentMovies from './currentMovies-reducer'
import user from './user-reducer'
import favs from './favs-reducer'


const rootReducer = combineReducers({
  currentMovies,
  user,
  favs
})

export default rootReducer
