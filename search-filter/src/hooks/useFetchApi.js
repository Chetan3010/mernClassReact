/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const useFetchApi = (url) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(null)

    const fetchProducts = async () => {
        try {
            const data = await fetch(url)
            const res = await data.json()
            setProducts(res)
            setFilteredProducts(res)
            setLoading(false)
        } catch(err) {
            console.log("error fetcing data");
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [url])


    return { products, filteredProducts, setFilteredProducts, isLoading, isError }
}

export default useFetchApi