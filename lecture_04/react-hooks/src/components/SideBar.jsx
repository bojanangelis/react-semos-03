import React from 'react'

const SideBar = ({ handleRoomId }) => {
  return (
    <div>
      <h1>Channels ⬇️</h1>
      <button onClick={() => handleRoomId('General')}>General</button>
      <button onClick={() => handleRoomId('Learning React')}>Learning React</button>
      <button onClick={() => handleRoomId('Random')}>Random</button>
    </div>
  )
}

export default SideBar
