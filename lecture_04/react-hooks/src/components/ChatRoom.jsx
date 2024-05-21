import React, { useEffect, useState } from 'react'

const ChatRoom = ({ roomId, chats, setChats }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const x = chats.filter((chat) => chat.roomId === roomId)
    setData(x)
  }, [roomId]) // ako room Id se smeni togash povtorno isfiltriraj gi chatrooms --> chats.filter((chat) => chat.roomId === roomId)

  console.log(data)

  return (
    <div>
      <h2>{data?.[0]?.roomId}</h2>
      <h2>{data?.[0]?.title}</h2>
    </div>
  )
}

export default ChatRoom
