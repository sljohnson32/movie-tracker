import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import{ devToolsEnhancer } from 'redux-devtools-extension'
import CurrentMoviesContainer from './containers/CurrentMoviesContainer'

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
  <Provider store={ store }>
    <CurrentMoviesContainer />
  </Provider>,
  document.getElementById('main')
)
