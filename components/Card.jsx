import React from 'react'
import './card.css'

const Card = (prop) => {
  return (
  <div className='board'>
    <div className='card'>
      <img src={prop.imageUrl} alt={prop.imageURL} className='team-badge' />
      <h2 className='team-name'>{prop.teamName}</h2>
      <h3 className='stadium-name'>{prop.stadiumName}</h3>
      <a href={prop.scheduleLink} target='_blank' className='schedule-button'>Schedule</a>
    </div>
  </div>
  )
}

export default Card