import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate()

  //   useEffect(() => {
  // if (!user) {
  //  navigate('/login')
  // }
  //   }, [])

  return (
    <div>
      <Link to={'/contacts/321'}>go to contacts</Link>

      <button>
        <Link to={'/contacts/321'}>go to contacts</Link>
      </button>

      <button onClick={() => navigate('/contacts/new-contact')}>+</button>
    </div>
  )
}

export default AboutPage
