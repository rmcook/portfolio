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
      contributions={`My main contributions to this project were implementing responsive features and adding mobile 
        functionality to three.js animations.
      `}
      challenges={`The biggest challenge on the project was learning three.js as I had never worked with any kind 
        of animation library before. It ended up being a fun little project and I'm thankful for the 
        opportunity I had to do something I'd never done before and to learn something new.
      `}
      tools={'JavaScript, three.js, HTML / CSS'}
      link={'http://tarotcardsoftech.artefactgroup.com/'}
    />
  )
}

export default TarotCardsOfTech
