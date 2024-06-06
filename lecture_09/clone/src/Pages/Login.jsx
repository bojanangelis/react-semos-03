import React from 'react'
import { useAuth } from '../store/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    setUser({
      name: 'Bojan Angjeleski',
      email: 'bojan@example.com',
    })
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
