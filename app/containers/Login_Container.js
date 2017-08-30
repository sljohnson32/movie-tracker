import { connect } from 'react-redux'
import { loginUser } from '../actions'
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
