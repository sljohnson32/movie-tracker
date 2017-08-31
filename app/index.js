import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App_Container'
import MovieList from './containers/MovieList_Container'
import UserLogin from './containers/Login_Container'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import{ devToolsEnhancer } from 'redux-devtools-extension'
import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <App />
          <Route exact path='/' component={ MovieList } />
          <Route exact path='/login' component={ UserLogin } />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)
