import React from 'react'
import './Card.css'

const Card = ({ img, price, subtitle, title, availableDates }) => {
  return (
    <div className='card--component'>
      <img className='card' src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{subtitle}</h2>
      <h4>{availableDates}</h4>
      <p>$ {price} at night</p>
    </div>
  )
}
// rafce

export default Card
