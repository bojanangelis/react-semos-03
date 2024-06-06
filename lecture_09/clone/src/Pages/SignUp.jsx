import React, { useState } from 'react'
import Step01 from '../components/Step01'
import Step02 from '../components/Step02'

const SignUp = () => {
  const [step, setStep] = useState(1)

  return (
    <div>
      {step === 1 && <Step01 setStep={setStep} />}
      {step === 2 && <Step02 setStep={setStep} />}
    </div>
  )
}

export default SignUp
