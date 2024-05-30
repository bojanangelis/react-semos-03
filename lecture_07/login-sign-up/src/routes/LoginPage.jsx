import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('token', 'super-secret-token123-semos')
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
