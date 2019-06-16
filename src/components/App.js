import React from 'react'
import { withRouter, NavLink, Route, Redirect } from 'react-router-dom'
import Resume from './Resume'
import Hero from './Hero'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions() {
    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight })
  }

  render() {
    const { width } = this.state

    return (
      <>
        <Hero width={width}/>
        <Resume />
      </>
    )
  }
}

export default withRouter(App)