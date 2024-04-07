import React from 'react'

function Filter({onUpUrl}) {
  return (
    <div className="btn-group d-flex justify-content-center align-items-center p-2" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1"  defaultChecked={true} onClick={()=>{
            onUpUrl("http://localhost:3000/products")
        }}/>
        <label className="btn btn-outline-primary" htmlFor="btnradio1">All</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2"  />
        <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={()=>{
            onUpUrl("http://localhost:3000/products?category=clothes")
        }}>Clothes</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3"  />
        <label className="btn btn-outline-primary" htmlFor="btnradio3" onClick={()=>{
            onUpUrl("http://localhost:3000/products?category=tv")
        }}>TV</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio4"  />
        <label className="btn btn-outline-primary" htmlFor="btnradio4" onClick={()=>{
            onUpUrl("http://localhost:3000/products?category=mobile")
        }}>mobile</label>
    </div>
  )
}

export default Filter