import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import createApp from './App'

const App = createApp(React)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
