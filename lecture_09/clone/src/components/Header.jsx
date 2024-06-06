import React from 'react'
import { useType } from '../store/typeProvider'
import { useAuth } from '../store/AuthProvider'

const Header = () => {
  const { setType } = useType()
  const { user } = useAuth()

  return (
    <header className='header-component'>
      <ul>
        <button onClick={() => setType('home')}>Home</button>
        <button onClick={() => setType('top')}>Top</button>
        <button onClick={() => setType('new')}>New</button>
      </ul>

      {user.name}
    </header>
  )
}

export default Header
