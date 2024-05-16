import React from 'react'
import Avatar from './Avatar'
// props
// Data Flow !!!!

// props moze da zemime i da pushtime samo od Parent. Ne moze od child to parent !

// od tuka ne mozam da pushtam nazat podatoci.
const Profile1 = ({ name, avatar_img, age, isPrivate, width, height }) => {
  // if (isPrivate) return <p>This profile is private</p>
  // functional based component
  return (
    <div>
      {isPrivate ? (
        <p>This profile is private</p>
      ) : (
        <div>
          <Avatar avatar_width={width} avatar_height={height} img={avatar_img} title={name} />
          <h2>{name}</h2>
          <h2>{age} years old</h2>
        </div>
      )}
    </div>
  )
}

export default Profile1
