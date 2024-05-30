import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      {/* <LinkedinHeader /> */}
      <Outlet />
    </>
  )
}

export default ProtectedRoute
