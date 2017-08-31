import { combineReducers } from 'redux'
import currentMovies from './currentMovies-reducer'
import user from './user-reducer'


const rootReducer = combineReducers({
  currentMovies,
  user
})

export default rootReducer
