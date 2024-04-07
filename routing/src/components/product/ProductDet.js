import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const ProductDet = (props) => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const nevigator = useNavigate()
  const fetchProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    setProduct(data)
    // console.log(data);
  }

  const [search_params] = useSearchParams()
  console.log(search_params.get("name"));
  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
      <div className='w-full h-screen flex p-14'>
        <div className="w-1/2 flex items-center justify-center">
          <img src={product.image} className='w-[30vw] h-[70vh]' alt="product-img" />
        </div>
        <div className="w-1/2 h-screen">
          <h1 className='font-semibold text-4xl' >{product.title}</h1>
          <h4 className=' italic'>{product.category}</h4>
          <h6 className='pt-5 '>{product.description}</h6>
          <div className='flex justify-between p-10' >
            <div className='text-xl ' >Rating: {product.rating ? product.rating.rate : ""}</div>
            <div className='border-[1px] bg-green-500 border-black text-white px-6 py-3 text-xl rounded-full'><span>{product.price}$</span></div>
          </div>
          <div className="flex justify-center">
          <div onClick={() => nevigator('/product')} className="w-40 cursor-pointer flex justify-center items-center bg-green-500 m-4 p-3 border-[1px] border-zinc-900 text-white rounded-md text-1xl uppercase font-semibold hover:bg-green-400">Go Back</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDet