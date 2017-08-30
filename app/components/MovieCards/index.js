import React from 'react'

const MovieCards = (props) => {

  const displayMovies = props.currentMovies.map((movie, i) => {
    console.log(movie);
    return (
      <div className='movie-card' key={i}>
        <h3>{movie.title}</h3>
      </div>
    )
  })

  return (
    <div className='movie-list'>
      {displayMovies}
    </div>
  )
}

export default MovieCards
