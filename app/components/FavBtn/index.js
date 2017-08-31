import React from 'react'

const FavBtn = (props) => {

  const { selected, movie, flipFavState } = props
  const { id, title, poster_path, release_date, vote_average, overview } = movie

  const getFavData = () => {
    const data = {
      movie_id: id,
	    user_id: props.user.id,
	    title,
	    poster_path,
	    release_date,
	    vote_average,
	    overview
    }
    return data
  }

  const addFav = () => {

    const favData = getFavData()
    fetch("/api/users/favorites/new", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(favData)
    })
    .then(data => {
      getFavs(props.user.id)
    })
  }

  const removeFav = () => {
    fetch(`/api/users/${props.user.id}/favorites/${id}`, {
      method: "DELETE"
    })
    .then(data => {
      getFavs(props.user.id)
      flipFavState()
    })
  }

  const getFavs = (id) => {
    fetch(`/api/users/${id}/favorites`)
    .then(data => data.json())
    .then(favs => props.setFavs(favs.data))
  }

  const handleClick = () => {
    if (selected) {
      removeFav()
    } else {
      addFav()
    }
  }

  return (
    <button className={ selected ? 'fav-btn active' : 'fav-btn'}
            onClick={ () => handleClick() }>Favorite</button>
    )
}

export default FavBtn
