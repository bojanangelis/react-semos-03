import { StarIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../store/basketSlice'

const CheckoutProduct = ({ id, title, price, description, category, image, rating }) => {
  const dispatch = useDispatch()

  const handleAddItem = () => {
    // Add item to cart with redux!
    dispatch(addToBasket({ id, title, price, description, category, image, rating }))
  }

  const handleRemoveItem = () => {
    // Remove item from cart with redux!

    dispatch(removeFromBasket({ id, title, price, description, category, image, rating }))
  }

  return (
    <div className='grid grid-cols-5'>
      <img src={image} alt={title} />
      <div>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <h4 className='my-3 '>{title}</h4>
        <div className='flex items-center'>
          {console.log(Array(Math.round(rating?.rate)).fill(1))}
          {Array(Math.round(rating?.rate))
            .fill(1)
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
      </div>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
      <div className='flex flex-col space-y-10 my-auto justify-self-end'>
        <button onClick={handleAddItem} className='button'>
          Add to cart
        </button>
        <button onClick={handleRemoveItem} className='button'>
          Remove from cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
