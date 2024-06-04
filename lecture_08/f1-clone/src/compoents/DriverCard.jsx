import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'

const DriverCard = ({
  driver_name,
  driver_img,
  country_code,
  team_name,
  team_color,
  driver_number,
  session_key,
}) => {
  const driver_name_lower_case = driver_name?.split(' ')?.join('_')?.toLowerCase()

  return (
    <Link
      to={{
        pathname: `/driver/${driver_name_lower_case}`,
        search: `?${createSearchParams({
          driver_number,
          session_key,
        })}`,
      }}
      style={{ backgroundColor: `#${team_color}` }}
      className='driver-card-component'
    >
      <h6>{country_code}</h6>
      <img src={driver_img} />
      <span>
        <h5>{driver_name}</h5>
        <h6>{team_name}</h6>
      </span>
    </Link>
  )
}

export default DriverCard
