import { useEffect, useState } from 'react'

const useFetch = (fetchUrl) => {
  const [data, setData] = useState(null)
  const [isFetched, setIsFetched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    if (fetchUrl) {
      fetch(fetchUrl)
        .then((res) => {
          if (!res.ok) {
            setIsFetched(false)
            return null
          } else {
            return res.json()
          }
        })
        .then((data) => {
          setIsLoading(false)
          setIsFetched(true)
          setData(data)
        })
    }
  }, [fetchUrl])

  return { data, isLoading, isFetched }
}

export default useFetch
