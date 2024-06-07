import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleState } from '../slices/signupSlice'
import { setWizardStep } from '../slices/wizardStepSlice'

const Step01 = () => {
  const dispatch = useDispatch()
  const email = useSelector((state) => state.signupSlice.email)
  const password = useSelector((state) => state.signupSlice.password)
  const confirm_password = useSelector((state) => state.signupSlice.confirm_password)

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={email}
        onChange={(e) => dispatch(handleState({ key: 'email', value: e.target.value }))}
        placeholder='email'
        type='email'
      />
      <br />
      <input
        value={password}
        onChange={(e) => dispatch(handleState({ key: 'password', value: e.target.value }))}
        placeholder='password'
        type='password'
      />
      <br />
      <input
        value={confirm_password}
        onChange={(e) => dispatch(handleState({ key: 'confirm_password', value: e.target.value }))}
        placeholder='Confrim Password'
        type='password'
      />
      <br />
      <button onClick={() => dispatch(setWizardStep(1))}>Previous Step</button>

      <button onClick={() => dispatch(setWizardStep(3))}>Next Step</button>
    </form>
  )
}

export default Step01
