import React from 'react'

function Project(props) {
  const { id, name, duration, summary, contributions, challenges, tools, link } = props
  return (
    <div className="project">
      <h3 id={id}>{name}</h3>
      <p>{duration}</p>
      <div className="project__summary">
        { summary && (
          <>
            <h4>Summary</h4>
            <p>{summary}</p>
          </>
        )}
        { contributions && (
          <>
            <h4>Contributions</h4>
            <p>{contributions}</p>
          </>
        )}
      </div>
      <p className="project__tools">{tools}</p>
      { link && (
        <a 
          href={link}
          target="_blank"
          rel="noopener"
          aria-labelledby={id}
        >
          {link}
        </a>
      )}
    </div>            
  )
}

export default Project