import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BannerComponent from '../components/BannerComponent'
import ProductsFeed from '../components/ProductsFeed'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json))
    }
    fetchData()
  }, [])
  console.log(products)
  return (
    <>
      <Header />
      <main className='max-w-screen-2xl mx-auto relative'>
        <BannerComponent />
        <ProductsFeed products={products} />
      </main>
    </>
  )
}

export default HomePage
