import React from 'react'

const IconLink = ({icon, link}) => (
  <div className="icon-link-wrapper">
    <a target="_blank" rel="noopener noreferrer" href={link} className="icon-link">
      <div className="icon-image" style={{backgroundImage: `url(${icon})`}}></div>
    </a>
  </div>
)

export default IconLink
