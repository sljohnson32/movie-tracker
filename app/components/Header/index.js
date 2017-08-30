import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

  const logoutButton = (
    <button>Logout</button>
  )
  const loginButton = (
    <Link to='/login'>Login</Link>
  )

  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      <div className='login-logout-container'>
        {props.user ? `Welcome, ${props.user.name}! {logoutButton}` : loginButton }
      </div>
    </div>
  )
};

export default Header;
