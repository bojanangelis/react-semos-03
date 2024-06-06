import React from 'react'
import { useType } from '../store/typeProvider'

const Home = () => {
  const x = useType()

  console.log(x)
  return <div>{x.type}</div>
}

export default Home
