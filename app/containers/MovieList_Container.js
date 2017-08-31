import { connect } from 'react-redux'
// import { setCurrentMovies } from '../actions'
import MovieList from '../components/MovieList'

const mapStateToProps = (reducer) => {
  return {
    currentMovies: reducer.currentMovies,
    favMovies: reducer.favs
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadCurrentMovies: (movies) => {
//       dispatch(setCurrentMovies(movies))
//     }
//   }
// }

export default connect(mapStateToProps, null)(MovieList)
