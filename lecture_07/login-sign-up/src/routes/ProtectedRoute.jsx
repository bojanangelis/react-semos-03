import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     navigate('/login')
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     return <Navigate to='/login' />
  //   }
  // }, [])

  return (
    <>
      {/* <LinkedinHeader /> */}

      {/* this is the same as useNavigate() */}
      {!localStorage.getItem('token') && <Navigate to='/login' />}
      <Outlet />
    </>
  )
}

export default ProtectedRoute
