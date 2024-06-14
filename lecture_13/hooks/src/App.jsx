import { useState } from 'react'
import './App.css'
import useDDV from './hooks/useDDV'
import useWindowSize from './hooks/useWindowSize'
import useCryptoFetcher from './hooks/useCryptoFetcher'
import { Dropdown } from 'semantic-ui-react'
import useScrollPosition from './hooks/useScrollPosition'
import useDeviceDetect from './hooks/useDeviceDetect'
import useFetch from './hooks/useFetch'

function App() {
  const [cart, setCart] = useState(0)
  const [coinName, setCoinName] = useState('BTC')
  const { hasScrolled, scrollToTop } = useScrollPosition()
  const { windowSize } = useWindowSize()

  // const [coinData, fetched, loading] = useCryptoFetcher(coinName)
  const { isMobile } = useDeviceDetect()

  const coinOptions = [
    {
      key: 'BTC',
      value: 'BTC',
      text: 'Bitcoin',
    },
    {
      key: 'ETH',
      value: 'ETH',
      text: 'Ethereum',
    },
  ]

  const { data, isLoading, isFetched } = useFetch(
    'https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159&speed>=315'
  )

  const {
    data: dataF1Speed,
    isLoading: isLoadingF1Speed,
    isFetched: isFetchedF1Speed,
  } = useFetch('https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159&speed>=315')

  // const [data, isLoading, isFetched] = useFetch(
  //   'https://api.openf1.org/v1/car_data?driver_number=55&session_key=9159&speed>=315'
  // )

  console.log(data)

  return (
    <>
      <h2>Is this mobile? -- {isMobile.toString()}</h2>
      <p>Window width: {windowSize.width}</p>
      <p>Mleko 200den</p>
      <button onClick={() => setCart(cart + 200)}>Add to cart</button>

      <p>----------------------------</p>
      <p>Total: {useDDV(cart)} (da se presmeta DDV)</p>

      <br />
      <Dropdown
        placeholder='Select Coin'
        clearable
        selection
        options={coinOptions}
        onChange={(e, { value }) => setCoinName(value)}
      />

      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>
      <p>This is the hook</p>

      {isLoading ? <p>Loading...</p> : null}

      {isFetched && <p> Driver number f1: {data[0]?.driver_number}</p>}

      {hasScrolled && (
        <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          Scroll to Top
        </button>
      )}
    </>
  )
}

export default App
