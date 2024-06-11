import { StarIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../store/basketSlice'

const ProductCard = ({ id, title, price, description, category, image, rating }) => {
  const dispatch = useDispatch()

  const handleAddItem = () => {
    // Add item to cart with redux!
    dispatch(addToBasket({ id, title, price, description, category, image, rating }))
  }

  return (
    <div className='relative flex flex-col m-4 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <img src={image} alt={title} />
      <h4 className='my-3 '>{title}</h4>
      <div className='flex items-center'>
        {console.log(Array(Math.round(rating?.rate)).fill(1))}
        {Array(Math.round(rating?.rate))
          .fill(1)
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}

      <button onClick={handleAddItem} className='button'>
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard
