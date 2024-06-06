import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <button onClick={() => localStorage.setItem('auth', 'bojanangjeleski_semos')}>Login</button>
    </div>
  )
}

export default LoginPage
