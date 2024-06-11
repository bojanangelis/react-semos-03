import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProducts'

const CartPage = () => {
  const items = useSelector((store) => store.basket.items)

  return (
    <>
      <Header />
      <main className='flex max-w-screen-2xl mx-auto'>
        <div className='flex-frow m-5 shadow-sm'>
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl'>
              {items.length > 1 ? 'Shopping cart' : 'Your amazon basket is empthy'}
            </h1>
          </div>
        </div>
      </main>
      {items.map(({ id, title, price, description, category, image, rating }) => (
        <CheckoutProduct
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      ))}
    </>
  )
}

export default CartPage
