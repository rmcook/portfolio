import React from 'react'
import { skills, frameworks, tools } from './appConstants'
import {
  GettyImages,
  UsaFacts,
  PeerSurvey,
  AsuAccessibility,
  ArtefactWebsite,
  TarotCardsOfTech
} from './projects/index'

const avatarImage = require('../assets/michael-avatar-photo.png')
const resume = require('../assets/Michael Cook - Resume.pdf')

function Resume(props) {

  return (
    <main className="resume content-wrapper" role="main">
      <div className="resume__row">
        <div className="resume__column resume__column--30">
          <div className="resume__summary">
            <div className="resume__heading">
              <img className="resume__photo"src={avatarImage} alt="Image of Michael Cook smiling."></img>
              <h1>Michael Cook</h1>
              <p>Ruby / Rails and JavaScript / React developer</p>
            </div>
            <h3 id="linkedin-heading">LinkedIn:</h3>
            <address>
              <a 
                href="https://www.linkedin.com/in/rmcook"
                target="_blank"
                rel="noopener"
                aria-labelledby="linkedin-heading"
              >
                www.linkedin.com/in/rmcook
              </a>
            </address>
            <h3 id="email-heading">Email:</h3>
            <address>
              <a 
                href="mailto:rmichaelcook@gmail.com" 
                aria-labelledby="email-heading"
              >
                rmichaelcook@gmail.com
              </a>
            </address> 
          </div>
          <h2>Skills:</h2>
          <ul className="resume__skills">
            {skills.map((skill, index) =>
              <li key={`${skill}-${index}`}>{skill}</li>
            )}
          </ul>
          <h2>Libraries / Frameworks:</h2>
          <ul className="resume__frameworks">
            {frameworks.map((framework, index) =>
              <li key={`${framework}-${index}`}>{framework}</li>
            )}
          </ul>
          <h2>My Tools:</h2>
          <ul className="resume__tools">
            {tools.map((tool, index) =>
              <li key={`${tool}-${index}`}>{tool}</li>
            )}
          </ul>
          <a className="resume__download-link" href={resume} download={"Michael Cook - Resume.pdf"}>Download Resume</a>
        </div>
        <div className="resume__column resume__column--70">
          <h2>Projects:</h2>
            <GettyImages />
            <UsaFacts />
            <ArtefactWebsite />
            <PeerSurvey />
        </div>
      </div>
    </main> 
  )
}

export default Resume