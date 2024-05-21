import { useState } from 'react'
import './App.css'
import ChatRoom from './components/ChatRoom'
import Form from './components/Form'
import SideBar from './components/SideBar'

function App() {
  const [chats, setChats] = useState([
    {
      roomId: 'General',
      title: '📣 You’re looking at the general channel',
      messages: [''],
    },
    {
      roomId: 'Learning React',
      title: '👋 Welcome to the learning-reactjs channel',
      messages: [''],
    },
    {
      roomId: 'Random',
      title: '🥳 You’ve found the random channel',
      messages: [
        {
          username: 'bojanangjeleski',
          timestamp: '21:48',
          value: 'Hello World',
        },
      ],
    },
  ])

  const [roomId, setRoomId] = useState('General')

  console.log(roomId)
  // setChats da moze da pushtime poraka vo taa poraka ke ni treba timestamp koga ni e momentalnoto vreme shto sme ja vpishale porakata
  // username, porakata value of the message.
  return (
    <>
      {/* <Form /> */}

      <SideBar handleRoomId={setRoomId} />
      {/* na prop handleRoomId mu ja pushtam funkcijata setRoomId */}
      <ChatRoom chats={chats} roomId={roomId} />
    </>
  )
}

export default App
