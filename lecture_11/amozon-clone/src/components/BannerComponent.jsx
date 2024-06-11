import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const BannerComponent = () => {
  return (
    <div className='relative w-full h-screen'>
      <Carousel infiniteLoop autoPlay interval={5000}>
        <div>
          <img src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' />
        </div>
        <div>
          <img src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' />
        </div>
      </Carousel>
    </div>
  )
}

export default BannerComponent
