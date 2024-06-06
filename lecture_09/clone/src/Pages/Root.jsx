import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Header />

      <Outlet />

      {/* component 1 */}
      {/* component 2 */}
      {/* component 3 */}
    </div>
  )
}

export default Root
