import React from 'react'
import { useSignup } from '../store/SignUpProvider'

const Step02 = ({ setStep }) => {
  const { email, setEmail, password, setPassword } = useSignup()

  return (
    <div>
      <h1>Step02</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' />
      <button onClick={() => setStep(1)}>Previous Step</button>
    </div>
  )
}

export default Step02
