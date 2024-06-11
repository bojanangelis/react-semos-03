import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const basket = useSelector((store) => store.basket.items)

  return (
    <header>
      <div className='flex items-center bg-[#131921]'>
        <div className='m-2 pr-4 flex items-center flex-grow'>
          <img
            width={150}
            height={150}
            src='https://cdn.logojoy.com/wp-content/uploads/20230629132639/current-logo-600x338.png'
            alt='logo'
          />
        </div>
        <div className='hidden sm:flex items-center h-10 rounded-lg flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            className='p-2 outline-none h-full w-6 flex-grow rounded-md'
            placeholder='Search your amazon product'
            type='text'
          />
          <MagnifyingGlassIcon className='h-6 w-6 m-4' />
        </div>
        <div className='text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap cursor-pointer'>
          <div className='link'>
            <button className='hover:underline flex flex-col underline-offset-2'>
              Hello, sign in <span>Account & list</span>
            </button>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'> & orders</p>
          </div>
          <Link to='/cart' className='relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-black font-bold rounded-full'>
              {basket.length}
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold mt-2'>Basket</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
