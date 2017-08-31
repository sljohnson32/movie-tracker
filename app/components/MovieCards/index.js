import React, { Component } from 'react'
import FavBtn from '../FavBtn'

export default class MovieCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false
    }
  }

  componentWillMount() {
    this.checkFavs()
  }

  checkFavs() {
    // console.log(this.props)
  }

  render() {
    const { title, id, poster_path } = this.props

    return (
      <div className='movie-card'>
        <h3>{title}</h3>
        <img src={`https://image.tmdb.org/t/p/w150/${poster_path}`} />
        <FavBtn selected={ this.state.favorite } />
      </div>
    )
  }
}
