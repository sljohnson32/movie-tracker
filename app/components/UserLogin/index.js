import React, { Component } from 'react'

export default class UserLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createUser: false,
      name: '',
      email: '',
      password: '',
      errorMsg: ''
    }
  }

  handleSubmit(type) {
    this.setState({ errorMsg: '' })
    const body = this.getBody(type)

    if (type === 'loginUser') {
      fetch("/api/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      .then(data => data.json())
      .then(user => {
        this.props.handleLogin(user.data)
        this.getFavs(user.data.id)
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ errorMsg: "The email and password you entered do not match"})
      })
    }

    if (type === 'createUser') {
      fetch("/api/users/new/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      .then(resp => {
        if (resp.status === 500) {
          throw Error()
        }
        return resp
      })
      .then(data => data.json())
      .then(data => {
        return {
          id: data.id,
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      })
      .then(user => {
        this.props.handleLogin(user)
        this.getFavs(user.id)
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ errorMsg: "The email you entered has already been used"})
      })
    }
  }

  getFavs(id) {
    fetch(`/api/users/${id}/favorites`)
    .then(data => data.json())
    .then(favs => this.props.setFavs(favs.data))
  }

  getBody(type) {
    if (type === 'loginUser') {
      return {
        email: this.state.email,
        password: this.state.password
      };
    }
    if (type === 'createUser') {
      return {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    }
  }

  toggleCreateUser() {
    this.setState({ createUser: !this.state.createUser, errorMsg: '' })
  }

  loginDisplay() {
    return (
      <div className='login-user'>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit('loginUser')
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
          this.handleSubmit('createUser')
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
        <p>{this.state.errorMsg}</p>
        { this.state.createUser ? this.createUserDisplay() : this.loginDisplay() }
      </div>
    )
  }
}
