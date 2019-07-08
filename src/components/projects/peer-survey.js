import React from 'react'
import Project from '../Project'

function PeerSurvey() {
  return(
    <Project
      id={'02'}
      name={'Employee feedback application - Artefact Group'}
      duration={'May 2018 - July 2018'}
      summary={`The peer survey is Artefact's internal peer feedback tool and is used quarterly 
        by all employees. Before this project, employee feedback was ratings-based and the purpose 
        of this project was to update the application so feedback would instead be aligned with company values.
      `}
      contributions={`I was the primary developer on the project while two other more senior developers would roll 
        on and off depending on availability. I evaluated the current-state models and relationships and added 
        a new values-based feedback model. I also updated many of the controllers and views (as there were pretty 
        significant front-end redesigns included), removed code that was no longer relevant, and expanded test 
        coverage throughout the application.
      `}
      challenges={`My biggest challenge on the project was understanding the application. Specifically, its classes 
        and the structure and relationships of its models. The application had many different developers and updates 
        over the years so there were a lot of inconsistencies and not a lot of test coverage.
      `}
      tools={'Ruby, Rails 5, MySQL, RSpec, Cucumber, BEM, Simple Form, PhantomJS'}
    />
  )
}

export default PeerSurvey
