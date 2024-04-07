import React from 'react'

function Pagination({ currentPage, totalPages, handlePageChange }) {
    return (
        <div className='flex justify-center gap-20'>
            {currentPage > 1 &&
                <button className="border-2 border-zinc-600 p-3 rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700 " onClick={(event) => {
                    // let pg = pageNo - 1
                    // setPageNo(pg)
                    // setProductsData(productsData.slice(5 * pg, (5 * pg) + 5))
                    handlePageChange('prev')
                }}>Previos Page</button>
            }
            {totalPages > currentPage &&
                <button className="border-2 border-zinc-600 p-3 rounded-lg bg-zinc-800 text-zinc-100 hover:bg-zinc-700" onClick={(event) => {
                    // let pg = pageNo + 1
                    // setPageNo(pg)
                    // setProductsData(productsData.slice(5 * pg, (5 * pg) + 5))
                    handlePageChange('next')
                }}>Next Page</button>
            }

        </div>
    )
}

export default Pagination