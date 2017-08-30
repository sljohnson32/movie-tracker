import { connect } from 'react-redux'
import { setCurrentMovies } from '../actions'
import App from '../components/App'

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentMovies: (movies) => {
      dispatch(setCurrentMovies(movies))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
