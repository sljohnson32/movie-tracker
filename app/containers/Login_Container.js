import { connect } from 'react-redux'
import { loginUser, setFavorites } from '../actions'
import UserLogin from '../components/UserLogin'

const mapStateToProps = (reducer) => {
  return {
    user: reducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user) => {
      dispatch(loginUser(user))
    },
    setFavs: (movies) => {
      dispatch(setFavorites(movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
