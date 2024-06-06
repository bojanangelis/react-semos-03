import { useContext, useEffect, useState } from 'react'
import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const authData = localStorage.getItem('auth')
    setAuth(authData)
    if (!authData) navigate('/login')
  }, [])

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
