import { connect } from 'react-redux'
import { setFavorites } from '../actions'
import FavBtn from '../components/FavBtn'

const mapStateToProps = (reducer) => {
  return {
    user: reducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavs: (movies) => {
      dispatch(setFavorites(movies))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavBtn)
