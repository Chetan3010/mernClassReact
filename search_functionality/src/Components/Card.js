import React from 'react'

function Card({ id, title, price, description, image, category }) {
  return (
    <div className='h-[60vh] w-[18vw] border-zinc-600 border-2 rounded-lg flex items-center flex-col shadow-2xl overflow-hidden hover:scale-105 ease-in duration-150'>
      <div className='p-5'>
        <img className='h-[40vh] p-2 w-full object-center' src={image} alt='product-img' />
      </div>
      <div className="bg-zinc-200 w-full h-full border-zinc-800 border-t-2 flex items-center flex-col ">
        <h1 className='text-red-500 pt-4'>{title.slice(0, 20) + "..."}</h1>
        <h2 className='text-zinc-900'>{price + " $"}</h2>
      </div>
    </div>
  )
}

export default Card