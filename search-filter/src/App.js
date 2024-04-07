/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Filter from './components/Filter'
import ProductList from './components/ProductList';
import Search from './components/Search';
import { useState } from 'react';
import useFetchApi from './hooks/useFetchApi';
import loader from './assets/loader.gif'

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [url, setUrl] = useState("http://localhost:3000/products")

  const { products, filteredProducts, setFilteredProducts, isLoading, isError } = useFetchApi(url)

  const updateUrl = (newUrl) => {
    setUrl(newUrl)
    setSearchTerm("")
  }

  const searchProduct = (value) => {
    const filter = products.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredProducts(filter)
  }



  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6 p-4">
            <Filter onUpUrl={updateUrl} />
          </div>
          <div className="col-lg-6 p-4">
            <Search onSearch={searchProduct} setSearch={setSearchTerm} searchTerm={searchTerm} />
          </div>
        </div>
        <div className="row">

          <div className="col-lg-12 p-4 display-relative">
            {isError
              ? <img src="https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg" alt="something went wrong" className='position-absolute start-50 top-50 translate-middle' />
              : isLoading
                ? <img src={loader} alt="loader" className='position-absolute start-50 top-50 translate-middle' />
                : <ProductList products={filteredProducts} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
