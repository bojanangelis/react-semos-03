import { useState } from 'react'
import React, { createContext, useContext } from 'react'

const TypeContext = createContext()

const TypeProvider = ({ children }) => {
  // ovoj provider ocekuva da go wrap-nite vo nekoi deca inicijalno jas go wrapnav vo app.jsx so site ruti so ni se napraveni
  // so ova nie imame pristap do site tipovi vo sekoja komponenat
  const [type, setType] = useState('all')
  const [buttonName, setButtonName] = useState('all')

  return (
    <TypeContext.Provider value={{ type, setType, buttonName, setButtonName }}>
      {children}
    </TypeContext.Provider>
  )
}

export const useType = () => {
  return useContext(TypeContext)
  // so useContext vikame sakame da gi koristime site vrednosti shto gi pushtame vo value. kako Props.
}

export default TypeProvider
