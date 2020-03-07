import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './global.scss'

ReactDOM.render(<App />, document.querySelector('#root'))

window.activateDracula = () => {
  const { head } = document
  const link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = "/static/css/dracula.css"
  head.appendChild(link)
}
