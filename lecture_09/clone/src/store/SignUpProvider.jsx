import React, { createContext, useContext, useState } from 'react'

const SingupContext = createContext()

const SignUpProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  // this is for the second step

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SingupContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </SingupContext.Provider>
  )
}

export const useSignup = () => useContext(SingupContext)

export default SignUpProvider
