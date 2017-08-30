import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import{ devToolsEnhancer } from 'redux-devtools-extension'
import App from './containers/AppContainer'

const store = createStore(rootReducer, devToolsEnhancer())

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
