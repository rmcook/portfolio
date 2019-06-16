import React from 'react'
import Project from '../Project'

function UsaFacts() {
  return(
    <Project
      id={'01'}
      name={'Data visualization application - Ballmer Group / USAFacts.org'}
      duration={'January 2019 - June 2019'}
      summary={`Usafacts is a data visualization application created by Steve Ballmer for government data. 
      Our team was tasked with taking the site from just having national data to allowing users to user and interact 
      with state and local data. This meant adding new state and local data to the API, creating new visualizations like
      widget charts, histograms, and maps, as well as enhancing many of the existing features.
      `}
      contributions={`I implemented many of the new charting features on the site includig the large histogram chart as well as the 
      map chart. In addition, I also implemented the small widget charts and assisted with the implementation
      of the features where interacting with one chart will update all other visualizations on the page. In addition, 
      i also lead stand-up meetings, sprint planning sessions, and updated the client weekly on development progress.
      `}
      challenges={`The biggest challenges on the project were ramping up on a large code base, learning es6, needing to learn a lot of 
      new framworks and libraries, understanding the patterns that were used throughout the application like higher-order 
      components, and best practices for the data manipulation requirements for each different visualization. This was my first time using react in a large, live application that had thousands of daily users. 
      Id never used redux, es6, any of the charting libraries, lodash, or flow, all of which were regularly used throughout
      the application so there was a lot to learn. Overall, this project was a pretty amazing experience and I'm 
      extremely proud of what we were able to accomplish.
      `}
      tools={'Node.js, JavaScript ES6, React, Redux, Jest, Enzyme, Flow, Lodash'}
      link={'https://www.usafacts.org'}
    />
  )
}

export default UsaFacts