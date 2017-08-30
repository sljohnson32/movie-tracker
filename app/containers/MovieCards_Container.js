import { connect } from 'react-redux'
// import { setCurrentMovies } from '../actions'
import MovieCards from '../components/MovieCards'

const mapStateToProps = (reducer) => {
  return {
    currentMovies: reducer.currentMovies
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadCurrentMovies: (movies) => {
//       dispatch(setCurrentMovies(movies))
//     }
//   }
// }

export default connect(mapStateToProps, null)(MovieCards)
