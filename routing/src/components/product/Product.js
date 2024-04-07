import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }



  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className='p-10 flex justify-center flex-wrap items-center gap-10'>
      {products.map((item, index) => {
        return (
          <motion.div 
            drag 
            dragElastic={.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} 
            whileDrag={{ scale: 1.1 }} key={index}>
            <Link to={`/product/${item.id}`} className='w-64 border-zinc-600 border-2 rounded-lg flex items-center flex-col shadow-2xl overflow-hidden hover:scale-105 ease-in duration-150'>
              <div className='p-5'>
                <img className='h-[40vh] p-2 w-full object-center' src={item.image} alt='product-img' />
              </div>
              <div className="bg-zinc-200 w-full h-full border-zinc-800 border-t-2 flex items-center flex-col ">
                <h1 className='text-red-500 pt-4'>{item.title.slice(0, 20) + "..."}</h1>
                <h2 className='text-zinc-900'>{item.price + " $"}</h2>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Product