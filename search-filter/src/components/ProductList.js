import React from 'react'

const ProductList = ({ products }) => {
  return (
    <div className="row gap-5 d-flex justify-content-center">
      {
        products.length > 0
          ?
          products.map((product, index) => (
            <div key={product.id} className="col-lg-3">
              <div className="card text-center" style={{ "width": "18rem" }}>
                <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" className="card-img-top p-2" alt="product-img" />
                <div className="card-body">
                  <div className="card-title">{product.name}</div>
                  <p className="card-text">Category: {product.category}</p>
                  <p className='card-text'>price : {product.price}</p>
                  <a href="." className='btn btn-primary'>Add to cart</a>
                </div>
              </div>
            </div>
          ))
          :
          <h2 className='fst-italic'>No products available.</h2>
      }
    </div>
  )
}

export default ProductList