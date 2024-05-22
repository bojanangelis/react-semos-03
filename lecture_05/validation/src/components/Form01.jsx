import React, { useState } from 'react'

const Form01 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleInputFirstName = (value) => {
    setFirstName(value.toUpperCase())
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

      <button>Submit</button>
    </form>
  )
}

export default Form01
