import { useState, useEffect, useCallback } from 'react'

const useScrollPosition = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const handleScroll = () => {
    // const offset = window.scrollY;
    setHasScrolled(window.scrollY > 300)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  // Return the hasScrolled state and the scrollToTop function
  return { hasScrolled, scrollToTop }
}

export default useScrollPosition
