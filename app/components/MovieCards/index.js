import React, { Component } from 'react'
import FavBtn from '../../containers/FavBtn_Container'

export default class MovieCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false
    }
    this.flipFavState = this.flipFavState.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favs !== nextProps.favs) {
      this.checkFavs(nextProps.favs)
    }
  }

  checkFavs(nextProps) {
    let isFav = nextProps.find(movie => {
      return movie.movie_id == this.props.id
    })
    if (isFav !== undefined) {
      this.flipFavState()
    }
  }

  flipFavState() {
    this.setState({ favorite: !this.state.favorite})
  }

  render() {
    const { title, id, poster_path } = this.props

    return (
      <div className='movie-card'>
        <h3>{title}</h3>
        <img src={`https://image.tmdb.org/t/p/w150/${poster_path}`} />
        <FavBtn flipFavState={this.flipFavState}
                selected={ this.state.favorite }
                movie={ this.props }
        />
      </div>
    )
  }
}
