import React from 'react'
import Header from '../compoents/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Header />
      {/* ovoj outlet treba sekogash da se povika koga imame root element i vo nego pushtame deca!!! */}
      <Outlet />
    </div>
  )
}

export default Root
