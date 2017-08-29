import { connect } from 'react-redux'
import { setCurrentMovies } from '../actions'
import App from '../components/App'

const mapStateToProps = (reducer) => {
  return {
    currentMovies: reducer.currentMovies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentMovies: (movies) => {
      dispatch(setCurrentMovies(movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
