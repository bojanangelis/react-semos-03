import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResizeWidth = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeWidth)

    return () => {
      window.removeEventListener('resize', handleResizeWidth) // malce po advance da ne cuva vo memorija useEffect.
    }
  }, [])

  return { windowSize }
}

export default useWindowSize
