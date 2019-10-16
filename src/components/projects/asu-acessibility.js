import React from 'react'
import Project from '../Project'

function AsuAcessibility() {
  return(
    <Project
      id={'03'} 
      name={'Accessibility updates for a social networking application - Arizona State University'}
      duration={'May 2018 - August 2018'}
      summary={`Baobab is a social networking platform for Arizona State University. Because the client 
        is a university they are required to meet very specific accessibility standards. This project focused 
        on taking the results of an accessibility audit and refactoring the application to ensure compliance.
      `}
      contributions={`In addition to refactoring some of the site's form related issues, my biggest 
        contributions were made doing code review of a third-party that was assisting with development.
      `}
      tools={'Ruby, Rails 5, PostgreSQL, JavaScript, React, RSpec, BEM, Axe, VoiceOver'}
    />
  )
}

export default AsuAcessibility
