import { connect } from 'react-redux'
import { logoutUser } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (reducer) => {
  return {
    user: reducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: (user) => {
      dispatch(logoutUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
