import React from 'react'

const Button = () => {
  const handleButton = () => {
    // nekoja logika tuka
    alert('You clicked')
  }

  return (
    <button
      onMouseDown={() => console.log('mouse down')}
      onMouseEnter={() => console.log('mouse enter')}
      onMouseLeave={() => console.log('mouse leave')}
      onClick={() => alert('You clicked !')}
    >
      I don't do anything
    </button>
  )
}

export default Button
