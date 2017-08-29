import { combineReducers } from 'redux'
import currentMovies from './currentMovies-reducer'

const rootReducer = combineReducers({
  currentMovies
})

export default rootReducer
