import { connect } from 'react-redux'
// import { setFavorites } from '../actions'
import MovieCards from '../components/MovieCards'

const mapStateToProps = (reducer) => {
  return {
    favs: reducer.favs
  }
}

export default connect(mapStateToProps)(MovieCards)
