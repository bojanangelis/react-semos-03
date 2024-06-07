import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleState } from '../slices/signupSlice'
import { setWizardStep } from '../slices/wizardStepSlice'

const Step01 = () => {
  const dispatch = useDispatch()

  const firstName = useSelector((state) => state.signupSlice.firstName)
  const lastName = useSelector((state) => state.signupSlice.lastName)
  const fullName = useSelector((state) => state.signupSlice.fullName)

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={firstName}
        onChange={(e) => dispatch(handleState({ key: 'firstName', value: e.target.value }))}
        placeholder='First Name'
        type='text'
      />
      <br />
      <input
        value={lastName}
        onChange={(e) => dispatch(handleState({ key: 'lastName', value: e.target.value }))}
        placeholder='Last Name'
        type='text'
      />
      <br />
      <input
        value={fullName}
        onChange={(e) => dispatch(handleState({ key: 'fullName', value: e.target.value }))}
        placeholder='Full Name'
        type='text'
      />
      <br />
      <button onClick={() => dispatch(setWizardStep(2))}>Next Step</button>
    </form>
  )
}

export default Step01
