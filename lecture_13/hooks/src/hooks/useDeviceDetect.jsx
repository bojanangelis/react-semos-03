import { useEffect, useState } from 'react'

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
    )
    setIsMobile(mobile)
  }, [])

  return { isMobile }
}

export default useDeviceDetect
