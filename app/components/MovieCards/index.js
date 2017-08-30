import React from 'react'

const MovieCards = (props) => {


  // console.log(props);
  const { title, id, poster_path } = props

  return (
    <div className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w150/${poster_path}`} />
      <h3>{title}</h3>

    </div>
  )
}

export default MovieCards
