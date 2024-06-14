import React from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
  const navigate = useNavigate()
  const handleLoginBtn = async () => {
    try {
      const login = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'user123',
          password: '1234',
        }),
      })

      const data = await login.text()
      if (data) {
        const decoded = jwtDecode(data)

        localStorage.setItem('token', data)

        if (new Date(decoded.exp).getTime() < new Date().getTime()) {
          navigate('/')
        }
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  return (
    <>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <button onClick={handleLoginBtn}>Login</button>
    </>
  )
}

export default Login
