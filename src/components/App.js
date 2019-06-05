import React from 'react'
import { withRouter, NavLink, Route, Redirect } from 'react-router-dom'
import ProfessionalSummary from './professional-summary'
import Skills from './skills'
import WorkExperience from './work-experience'

function App(props) {
  const image = require('../assets/michael.png')
  const { pathname } = props.location

  return (
    <>
      <section className="introduction page-container">
        <img className="avatar-image" src={image} alt="Small photo of Michael Cook"></img>
        <h1>Hello, I'm Michael Cook.</h1> 
        <p>A full-stack React / Node.js and Ruby / Rails developer.</p>
      </section>
      <nav className="navigation">
        <ul>
          <li><NavLink activeClassName="active" exact to="/intro">Intro</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/skills">Skills</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/projects">Projects</NavLink></li>
        </ul>
      </nav>
      <div className="drop-shadow"></div>
      <div className="drop-shadow-cover"></div>
      
      <Redirect from="/" exact to="/intro" /> 
      <Route exact path="/intro" component={ ProfessionalSummary }/>      
      <Route exact path="/skills" component={ Skills }/>      
      <Route exact path="/projects" component={ WorkExperience }/>

      <footer className="footer shaded">
        <div className="page-container">
          <p>Michael Cook - 2019</p>
        </div>
      </footer>
    </>
  )
}

export default withRouter(App)