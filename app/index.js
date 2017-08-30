import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import{ devToolsEnhancer } from 'redux-devtools-extension'
import App from './containers/App_Container'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('main')
)
