import React, { Component } from 'react'

export default class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      createUser: false,
      username: '',
      password: ''
    }
  }

  handleSubmit() {
    console.log("Submitted!")
  }

  // const displayMovies = props.currentMovies.map(movie =>
  //   <MovieCards { ...movie } key={ movie.id } />
  // )
  render() {
    return (
      <div className='user-login'>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit()
        }}>
          <label>
            Email
            <input value={this.state.username}
                  placeholder='Enter your email...'
                  onChange={ (e) => this.setState({ username: e.target.value })}
            />
          </label>
          <label>
            Password
            <input value={this.state.password}
                   placeholder='Enter your password...'
                   onChange={ (e) => this.setState({ password: e.target.value })}
            />
          </label>
          <input type="submit" disabled={!(this.state.username && this.state.password)}/>
        </form>
        <button>Create User Account</button>
      </div>
    )
  }
}
