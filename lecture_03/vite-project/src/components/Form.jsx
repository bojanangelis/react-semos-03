import React from 'react'

const Form = () => {
  const handleForm = (e) => {
    e.preventDefault()
    alert('Form submitted')
  }

  // zashto se koristi preventDefault()
  // nativno html koga  sumbitira forma se refreshira taka da nie so React sakame da go zabranime toa

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <button>Submit</button>
    </form>
  )
}

export default Form
