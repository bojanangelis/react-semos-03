import React, { useState } from 'react'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(null)
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorFirstName, setErrorFirstname] = useState(null)
  const [errorLastName, setErrorLastName] = useState(null)
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const validateFirstName = (data, type) => {
    if (data.length < 3) {
      console.log(data)
      setErrorFirstname('Invalid first name')
    } else {
      setErrorFirstname('')
    }
  }

  const validateLastName = (data, type) => {
    if (data.length < 3) {
      setErrorLastName('Invalid last name')
    }
  }

  const validatePhoneNumber = (data, type) => {
    console.log(Number(data))
    if (!Number(data) > 0) {
      setErrorPhoneNumber('Invalid phone number')
    }
  }

  const validateEmail = (data) => {
    if (!data.include('@')) {
      setErrorEmail('Invalid email data')
    }
  }

  //   console.log(errors)
  const validatePassword = (data, type) => {
    console.log('validate passowrd', data)
    if (data.length < 6) {
      setErrorPassword('Invalid password')
    }
  }
  const handleSignUP = () => {
    validateFirstName(firstName, 'firstName')
    validateLastName(lastName, 'lastName')
    validatePhoneNumber(phoneNumber, 'phoneNumber')
    validateEmail(email, 'email')
    validatePassword(password, 'password')
  }
  // istoto kaoko shto e na login componentatata
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='first name'
          type='text'
        />
        {errorFirstName}
      </div>

      <div>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='last name'
          type='text'
        />
        {errorLastName}
      </div>

      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder='phone number'
        type='tel'
      />
      {errorPhoneNumber}
      <input
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        placeholder='Date of birth'
        type='date'
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email'
        type='email'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'
        type='password'
      />
      {errorPassword}
      <button onClick={() => handleSignUP()}>Sing UP</button>
    </form>
  )
}

export default SignUp
