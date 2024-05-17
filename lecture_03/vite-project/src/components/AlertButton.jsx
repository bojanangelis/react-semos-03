import React from 'react'
import PropTypes from 'prop-types' // ES6

const AlertButton = ({ message, children }) => {
  return <button onClick={message}>{children}</button>
}

AlertButton.propTypes = {
  message: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default AlertButton
