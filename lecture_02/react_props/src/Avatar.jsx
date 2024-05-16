import React from 'react'

const Avatar = ({ img, title, avatar_width, avatar_height }) => {
  return (
    <img
      style={{ borderRadius: '50%' }}
      width={avatar_width}
      height={avatar_height}
      src={img}
      alt={title}
    />
  )
}

export default Avatar
