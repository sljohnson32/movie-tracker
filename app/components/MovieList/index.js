import React from 'react'
import MovieCards from '../../containers/MovieCards_Container'

const MovieList = (props) => {

  const displayMovies = props.currentMovies.map(movie =>
    <MovieCards { ...movie } key={ movie.id } />
  )

  return (
    <div className='movie-list'>
      { displayMovies }
    </div>
  )
}

export default MovieList;
