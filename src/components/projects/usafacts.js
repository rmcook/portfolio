import React from 'react'
import Project from '../Project'

function UsaFacts() {
  return(
    <Project
      id={'01'}
      name={'Data visualization application - Ballmer Group / USAFacts.org'}
      duration={'January 2019 - June 2019'}
      summary={`UsaFacts is a data visualization application created by Steve Ballmer for government data. 
      Our team was tasked with updating the site so users could access state and local data in addition 
      to national data. This meant adding new state and local data to the API, creating new visualizations like
      widget charts, histograms, and maps, as well as enhancing many of the existing features.
      `}
      contributions={`I implemented many of the new charting features on the site including the large histogram chart 
      as well as the map chart. In addition, I also implemented the small widget charts, assisted with the implementation
      of the features where interacting with one chart will update all other visualizations on the page, and lead team and
      client progress reporting meetings.
      `}
      challenges={`This was my first time using react in a large, live application that had thousands of daily users. The 
      biggest challenges on the project were ramping up on a large code base, learning ES6, learning many new framworks
      and libraries, understanding the patterns that were used throughout the application, as well as best practices for 
      accessing and manipulating large amounts of data.
      `}
      tools={'Node.js, JavaScript ES6, React, Redux, Jest, Enzyme, Flow, Lodash'}
      link={'https://www.usafacts.org'}
    />
  )
}

export default UsaFacts
