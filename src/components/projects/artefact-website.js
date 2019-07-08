import React from 'react'
import Project from '../Project'

function ArtefactWebsite() {
  return (
    <Project
      id={'04'} 
      name={'Website for Seattle-based design firm - Artefact Group'}
      duration={'July 2018 - December 2018'}
      summary={`This project was a complete redesign and new implementation of the Artefact website. 
        The project had a very aggressive timeline and was implemented with Wordpress and Gutenberg 
        which at the time had just been released as WordPress's new editor.
      `}
      contributions={`I learned a lot on this project about agile development methodologies and the
        management of a software development project. In addition to developing many of the features 
        that can be found on the home page and in Artefact's case studies, I also managed the backlog, 
        assisted with QA testing, coordinated with our designers on the feasability of their designs, 
        and lead stand-ups and sprint planning meetings.
      `}
      challenges={`This was a front-end heavy project so ramping up these skills was initially pretty 
        challenging. Also, learning PHP, WordPress development, and how Gutenberg worked (Gutenberg 
        is ultimately very similiar to React) all presented their own interesting challenges.
      `}
      tools={'JavaScript, React, PHP, WordPress'}
      link={'https://www.artefactgroup.com'}
    />
  )
}

export default ArtefactWebsite
