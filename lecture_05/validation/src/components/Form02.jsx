import React, { useState } from 'react'

const Form02 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const validate = (value) => {
    return value.length > 2
  }
  const handleInputFirstName = (value) => {
    setFirstName(value.toUpperCase())
  }
  const handleSubmit = () => {
    if (validate(firstName) && validate(lastName)) {
      alert('Form submitted')
    } else {
      alert('Form not submitted')
    }
  }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        value={firstName}
        placeholder='firstname'
        onChange={(e) => handleInputFirstName(e.target.value)}
      />

      <input
        type='text'
        value={lastName}
        placeholder='lastname'
        onChange={(e) => setLastName(e.target.value.toLowerCase())}
      />

      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form02
