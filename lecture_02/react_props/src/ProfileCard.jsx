import React from 'react'

const ProfileCard = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: 10, padding: 20, display: 'flex' }}>
      {children}
    </div>
  )
}

export default ProfileCard
