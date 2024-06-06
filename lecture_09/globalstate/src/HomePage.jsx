import React from 'react'
import { useAuth } from './store/AuthProvider'

const HomePage = () => {
  const { auth } = useAuth()
  console.log(auth)
  return (
    <div>
      <button>Sign out here</button>
    </div>
  )
}

export default HomePage
