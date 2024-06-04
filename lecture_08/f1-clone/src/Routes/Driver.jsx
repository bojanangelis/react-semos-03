import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DriverCard from '../compoents/DriverCard'

const Driver = () => {
  const [searchParams] = useSearchParams()
  const [driver, setDriver] = useState(null)

  useEffect(() => {
    const fetchF1Driver = async () => {
      try {
        const getF1BySessionKey = await fetch(
          `https://api.openf1.org/v1/drivers?driver_number=${searchParams.get(
            'driver_number'
          )}&session_key=${searchParams.get('session_key')}`
        )
        const f1DriverData = await getF1BySessionKey.json()
        setDriver(f1DriverData[0])
      } catch (err) {
        console.log(err)
      }
    }

    fetchF1Driver()
  }, [])

  return (
    <DriverCard
      team_color={driver?.team_colour}
      driver_name={driver?.full_name}
      driver_img={driver?.headshot_url}
      country_code={driver?.country_code}
      team_name={driver?.team_name}
      session_key={driver?.session_key}
      driver_number={driver?.driver_number}
    />
  )
}

export default Driver
