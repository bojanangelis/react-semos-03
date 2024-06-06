import React from 'react'
import { useSignup } from '../store/SignUpProvider'

const Step01 = ({ setStep }) => {
  const { firstName, setFirstName, lastName, setLastName, fullName, setFullName } = useSignup()

  return (
    <div>
      <h1>Step01</h1>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' />
      <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' />

      <button onClick={() => setStep(2)}>Next Step</button>
    </div>
  )
}

export default Step01
