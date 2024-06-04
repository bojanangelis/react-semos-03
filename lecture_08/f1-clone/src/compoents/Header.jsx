import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img
          src='https://media.formula1.com/image/upload/f_auto,c_limit,w_195,q_auto/etc/designs/fom-website/images/f1_logo'
          alt='f1 logo'
        />
      </div>

      <div>
        <Link to='/drivers'>Drivers</Link>
      </div>

      <div>
        <button>Sign in</button>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Header
