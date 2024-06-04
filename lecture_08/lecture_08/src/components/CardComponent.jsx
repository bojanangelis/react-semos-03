import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardComponent = ({ userId, title, body, id }) => {
  const navigate = useNavigate()
  return (
    <div style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px', margin: '10px' }}>
      <h4>{title}</h4>
      <p>{body}</p>
      <div>
        <span>UserId: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
      <button onClick={() => navigate(`/post/${id}`)}>Show more</button>
    </div>
  )
}

export default CardComponent
