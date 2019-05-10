import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import './App.css'
import rootReducer from './reducers'

const store = createStore(rootReducer,applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)