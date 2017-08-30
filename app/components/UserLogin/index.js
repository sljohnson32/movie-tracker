import React, { Component } from 'react'

export default class UserLogin extends Component {
  constructor() {
    super()
    this.state = {
      createUser: false,
      name: '',
      email: '',
      password: ''
    }
  }

  handleSubmit() {
    console.log("Submitted!")
  }

  toggleCreateUser() {
    this.setState({ createUser: !this.state.createUser })
  }

  loginDisplay() {
    return (
      <div className='login-user'>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit(loginUser)
        }}>
          <label>
            Email
            <input value={this.state.email}
                  placeholder='Enter your email...'
                  onChange={ (e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Password
            <input value={this.state.password}
                   placeholder='Enter your password...'
                   onChange={ (e) => this.setState({ password: e.target.value })}
            />
          </label>
          <input type="submit"
                 value="Login"
                 disabled={!(this.state.email && this.state.password)}
          />
        </form>
        <button onClick={ () => this.toggleCreateUser() }>Create User Account</button>
      </div>
    )
  }

  createUserDisplay() {
    return (
      <div className='create-user'>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit(createUser)
        }}>
          <label>
            Name
            <input value={this.state.name}
                  placeholder='Enter your name...'
                  onChange={ (e) => this.setState({ name: e.target.value })}
            />
          </label>
          <label>
            Email
            <input value={this.state.email}
                   placeholder='Enter your email...'
                   onChange={ (e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Password
            <input value={this.state.password}
                   placeholder='Enter your password...'
                   onChange={ (e) => this.setState({ password: e.target.value })}
            />
          </label>
          <input type="submit"
                 value="Create Account"
                 disabled={!(this.state.name && this.state.email && this.state.password)}
          />
        </form>
      </div>
    )
  }

  render() {
    return (
      <div className='login-container'>
        { this.state.createUser ? this.createUserDisplay() : this.loginDisplay() }
      </div>
    )
  }
}
