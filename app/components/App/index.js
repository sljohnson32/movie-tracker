import React, { Component } from 'react';
import Header from '../Header'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=38ed5471050eec98d33af7566b4aaff8&language=en-US')
      .then(data => data.json())
      .then(data => this.props.loadCurrentMovies(data.results))
  }

  render() {
    console.log(this.props.currentMovies)
    return (
      <div className='App-Container'>
        <Header />
      </div>
    )
  }
}
