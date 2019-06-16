import React from 'react'
import Project from '../Project'

function AsuAcessibility() {
  return(
    <Project
      id={'03'} 
      name={'Accessibility updates for a social networking application - Arizona State University'}
      duration={'May 2018 - August 2018'}
      summary={`Baobab was a social networking platform for Arizona State University. Because the client 
        was a university they were required to meet specific accessibility standards. Our job was to take 
        the results of an audit that had been done and refactor the application to ensure compliance.
      `}
      contributions={`This was one of my very first client projects as a developer. I was able to pick up 
        a few stories and refactor some of the form related issues but overall most of my time and my biggest 
        contributions were made doing code review of a third-party development team.
      `}
      challenges={`Some of the challenges on this project was just doing code review of experienced senior 
        developers as a new dev, working through some of the challenges that can present, understanding 
        how react was being used with Ruby / Rails, and probably most challenging was learning about 
        accessibility and why it's important.
      `}
      tools={'Ruby, Rails 5, PostgreSQL, JavaScript, React, RSpec, BEM, Axe, VoiceOver'}
    />
  )
}

export default AsuAcessibility