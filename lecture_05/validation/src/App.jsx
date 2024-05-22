import { useState } from 'react'
import './App.css'
import Form01 from './components/Form01'
import Form02 from './components/Form02'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  // destruction
  const [obj, setObj] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  // console.log({ ...obj, newThing: 'this is a new thing' })

  // setObj({ ...obj, name: 'new Name' })
  // ...obj --> pravime kopija eve shto imame vo kopijata dolu
  // name: '',
  // email: '',
  // password: '',

  const handleChange = (e) => {
    console.log(e)
    setObj({ ...obj, [e.target.name]: e.target.value })
  }
  console.log({ ...obj })

  return (
    <>
      <input
        type='text'
        name='fullName'
        value={obj.name}
        onChange={(event) => handleChange(event)}
        id=''
      />
      <input
        type='text'
        name='email'
        value={obj.email}
        onChange={(event) => handleChange(event)}
        id=''
      />
      <input
        type='text'
        name='password'
        value={obj.password}
        onChange={(event) => handleChange(event)}
        id=''
      />

      {/* <Form01 />

      <h2>Form 02</h2>
      <Form02 /> */}

      {/* <h2>Sing up</h2>
      <SignUp /> */}

      <h4>Login</h4>
      <Login />
    </>
  )
}

export default App
