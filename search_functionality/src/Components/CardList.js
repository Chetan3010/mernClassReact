import React from 'react'
import Card from './Card'

function CardList({ products }) {
  
  return (
    <>
      <div className='p-10 flex justify-start gap-5'>
        {products.map((item, index) => {
          return <Card key={item.id} {...item} />
        })}
      </div>
    </>
  )
}

export default CardList