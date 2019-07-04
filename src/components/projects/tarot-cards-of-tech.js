import React from 'react'
import Project from '../Project'

function TarotCardsOfTech() {
  return(
    <Project
      id={'05'} 
      name={'Website for Tarot Cards of Tech - Artefact Group'}
      duration={'April 2018'}
      summary={`The Tarot Cards of Tech is a product that was released by Artfact to help companies / creators 
        consider the impacts of technology. This project focused on the website that allowed users to experience 
        the tarot cards online.
      `}
      contributions={`My main contributions to this project were implementing responsive features to the site 
        and adding mobile functionality to the three.js animations.
      `}
      challenges={`The biggest challenge on this project was learning three.js so I could expanding the site's 
        existing animations to work on mobile devices. 
      `}
      tools={'JavaScript, three.js, HTML / CSS'}
      link={'http://tarotcardsoftech.artefactgroup.com/'}
    />
  )
}

export default TarotCardsOfTech
