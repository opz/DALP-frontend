import React from 'react'

const IconLink = ({icon, link}) => (
  <div className="icon-link-wrapper">
    <a href={link} className="icon-link">
      <div className="icon-image" style={{backgroundImage: `url(${icon})`}}></div>
    </a>
  </div>
)

export default IconLink
