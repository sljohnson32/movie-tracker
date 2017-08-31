import React from 'react'

const FavBtn = (props) => {

  const { selected } = props
  const handleClick = () => {
    console.log('fav')
  }

  return (
    <button className={ selected ? 'fav-btn active' : 'fav-btn'}
            onClick={ () => handleClick() }>Favorite</button>
    )
}

export default FavBtn
