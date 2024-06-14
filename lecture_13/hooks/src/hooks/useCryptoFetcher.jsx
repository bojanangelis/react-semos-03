import { useEffect, useState } from 'react'

const useCryptoFetcher = (coinName) => {
  const coinAPIKey = 'svoe api key od coinapi.io'
  const [coinData, setCoinData] = useState(null)
  const [fetched, setFetched] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const coinUrl = `https://rest.coinapi.io/v1/exchangerate/${coinName}/USD`
    setLoading(true)
    if (coinName) {
      fetch(coinUrl, {
        headers: {
          'X-CoinAPI-Key': coinAPIKey,
        },
      })
        .then((res) => {
          if (!coinUrl) {
            setFetched(false)
            return null
          }
          if (!res.ok) {
            setFetched(false)
            return null
          } else {
            return res.json()
          }
        })
        .then((data) => {
          setLoading(false)
          setFetched(true)
          setCoinData(data)
        })
    }
  }, [coinName])
  // ni treba za da renderira

  return [coinData, loading, fetched]
}

export default useCryptoFetcher
