import React from 'react'
import ReactDOM, { render } from 'react-dom'

const title = 'woow I have hot reloading'

render(
  <div>{title}</div>,
  document.getElementById('root')
)

module.hot.accept()
