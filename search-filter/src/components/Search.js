import React from 'react'

function Search({setSearch, onSearch, searchTerm}) {
    return (
        <div className="form-floating">
            <input type="search" className="form-control" id="floatingInput" value={searchTerm} placeholder="name@example.com" onChange={ (e) => {
                onSearch(e.target.value)
                setSearch(e.target.value)
            }} />
            <label htmlFor="floatingInput" >Search product</label>
        </div>
    )
}

export default Search