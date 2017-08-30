import React from 'react'

const MovieList = (props) => {

  const displayMovies = props.currentMovies.map(movie => {
    return (
      <MovieCard key={ movie.id } {...movie} />
    )})

  return (
    <div className='movie-list'>
      { displayMovies }
    </div>
  )
}

export default MovieList
