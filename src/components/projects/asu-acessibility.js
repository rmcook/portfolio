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
        the results of an audit that had been completed and refactor the application to ensure compliance.
      `}
      contributions={`In addition to refactoring some of the site's form related issues my biggest 
        contributions were made doing code review of a third-party development team.
      `}
      challenges={`Some of the challenges on this project were understanding how react can be used within a 
        Ruby / Rails environment and understanding accessibility to a point where I could assist with a large 
        backlog of pull requests.
      `}
      tools={'Ruby, Rails 5, PostgreSQL, JavaScript, React, RSpec, BEM, Axe, VoiceOver'}
    />
  )
}

export default AsuAcessibility
