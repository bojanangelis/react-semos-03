import React from 'react'
import ProductCard from './ProductCard'

const ProductsFeed = ({ products }) => {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
      {products?.slice(0, 4)?.map(({ id, title, price, description, category, image, rating }) => (
        <ProductCard
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      ))}
      {products?.slice(4, 5)?.map(({ id, title, price, description, category, image, rating }) => (
        <ProductCard
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
          rating={rating}
        />
      ))}

      {products
        ?.slice(5, products.length)
        ?.map(({ id, title, price, description, category, image, rating }) => (
          <ProductCard
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  )
}

export default ProductsFeed
