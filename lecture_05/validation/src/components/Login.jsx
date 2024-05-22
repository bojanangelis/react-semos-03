import { useState } from 'react'
import React from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const handleEmailChange = (e) => {
    setEmail(e.target.value) // isto e samo povikuvanjeto na on change na 32 linija e razlinco
    if (e.target.value.includes('@')) {
      setErrorEmail(null)
    } else {
      setErrorEmail('Invalid email')
    }
  }

  const handlePasswordChange = (value) => {
    setPassword(value)
    if (value.length >= 8) {
      setErrorPassword(null)
    } else {
      setErrorPassword('Invalid password')
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={email}
        onChange={(e) => handleEmailChange(e)}
        placeholder='Email'
        type='email'
      />
      {errorEmail}
      <input
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
        placeholder='Password'
        type='password'
      />
      {errorPassword}
      <button>Login</button>
    </form>
  )
}

export default Login
