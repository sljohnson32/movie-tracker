import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

  const logoutButton = <button onClick={ () => props.handleLogout() }>Logout</button>
  const loginButton = <NavLink to='/login'>Login</NavLink>

  return (
    <div className='header'>
      <h1>Movie Tracker</h1>
      <div className='login-logout-container'>
        {props.user ?
          <div>
            <h4>Welcome, {props.user.name}!</h4>
            {logoutButton}
          </div>
          : loginButton }
      </div>
    </div>
  )
};

export default Header;
