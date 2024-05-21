import React, { useEffect, useState } from 'react'

const Form = () => {
  // var email = document.getElementById('email');
  // niza i vo nizata prvata vrednost ni e email a vtorata vrednost ni e setEmail ili seter funkcija
  // use state e lokalen state
  // znaci useState gi povikuvame top level at the component
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [toggle, setToggle] = useState(false)
  const [toggleColor, setToggleColor] = useState('red')
  const [employedStatus, setEmployedStatus] = useState({ Employed: false, Unemployed: false })

  const [data, setData] = useState([])

  useEffect(
    () => {
      //   alert('This is useEffect')
    },
    [toggle, employedStatus] // dependecy array
    // vo dependecy array ako ja smenime vrednosta vo slucajnov na toggle se shto e vnatre vo ovoj useEffect ke se izvrshi povtorno
  )

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTkwZjI3YzEwZDZhY2U4ZWRjMWY0MGU4NGY5OGI2MSIsInN1YiI6IjY1Mjk4MmQ2MWYzZTYwMDEzOTlkYWUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YFBu95bqgjrJH_R7Vv8-liKTthxv1Vi1XtbRjawwdn0',
    },
  }

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
  }, []) // dependecy array prazen empthy

  // password --> vrednost kako var
  // setPassword --> funkcija koja shto ja manipulirame (ili ja zacuvuvame vrednosta)

  //   console.log('this is firstName--> ', firstName)
  //   console.log('this is lastName--> ', lastName)
  //   console.log('this is email--> ', email)
  //    setEmail(e.target.value)

  const handleToggleButton = () => {
    setToggle(!toggle)
    // if (toggle == true) ////// same isto e
    if (toggle) {
      setToggleColor('green')
    } else {
      setToggleColor('red')
    }
  }
  console.log('employedStatus--> ', employedStatus)
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button onClick={handleToggleButton} style={{ backgroundColor: toggleColor }}>
        Toggle
      </button>

      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type='text'
        placeholder='First Name'
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type='text'
        placeholder='Last Name'
      />
      <input
        type='email'
        value={email}
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)} // controlled input
      />
      <input
        value={password}
        // onChange neshto se menuva vo ovoj input
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
      />
      <label htmlFor='Employed'>Employed</label>
      <input
        // onChange={(e) => setEmployedStatus(e.target.value)}
        onChange={(e) => setEmployedStatus({ ...employedStatus, Employed: e.target.checked })}
        value={employedStatus.Employed}
        type='checkbox'
      />
      <label htmlFor='Unemployed'>Unemployed</label>
      <input
        onChange={(e) => setEmployedStatus({ ...employedStatus, Unemployed: e.target.checked })}
        value={employedStatus.Unemployed}
        type='checkbox'
      />

      <button>Submit</button>
    </form>
  )
}

export default Form
// const [email, setEmail] = useState('') // same as down
//   var email = document.getElementById('email')
//   function setEmail(e) {
//     email = e.target.value
//   }
