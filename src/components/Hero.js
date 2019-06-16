import React from 'react'
import { shortIntro, longIntro } from './appConstants'

function Hero(props) {
  const { width } = props
  const introText = (width < 800) ? shortIntro : longIntro

  return (
    <section 
      className="hero" 
      role="region" 
      aria-labelledby="region-heading"
    >
      <div className="content-wrapper">
        <div className="hero__text">
          <h1 id="region-heading">Hello World</h1>
          <p>{introText}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero