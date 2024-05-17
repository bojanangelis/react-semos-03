import React from 'react'
import PropTypes from 'prop-types'

import '../App.css'

const CardComponent = ({ img, type, title, description, release_date, rating }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
    <div className='card__component'>
      <img width={220} src={`${BASE_URL}${img}`} alt={title} />
      <p>{description}</p>
      <h2>{title}</h2>
      <span>
        {type} · {release_date} · {rating}
      </span>
    </div>
  )
}

CardComponent.propTypes = {
  img: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  release_date: PropTypes.string,
  rating: PropTypes.string,
}

CardComponent.defaultProps = {
  type: 'movie',
  description: '',
  release_date: '',
  rating: '',
}

export default CardComponent
