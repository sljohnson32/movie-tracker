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
    handleLogout: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
