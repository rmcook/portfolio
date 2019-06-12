import React from 'react'
import { withRouter, NavLink, Route, Redirect } from 'react-router-dom'

function App(props) {
  const image = require('../assets/michael.png')
  const { pathname } = props.location

  return (
    <section className="main-content">
      <h1>Hello World.</h1>
    </section>
  )
}

export default withRouter(App)