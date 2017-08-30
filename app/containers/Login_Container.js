import { connect } from 'react-redux'
import { loginUser } from '../actions'
import UserLogin from '../components/UserLogin'

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (user) => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(UserLogin)
