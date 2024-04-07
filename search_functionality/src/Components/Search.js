import React from 'react'

function Search({ handleSearch, searchTerm, setSearchTerm }) {

  const submitForm = (event) =>{
    event.preventDefault()
    handleSearch(searchTerm) 
  }

  return (
    <div className='flex items-center justify-center'>
        <form onSubmit={submitForm}>
        <input 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' 
          type='text' 
          placeholder='Enter product here'
          onChange={(e)=>{
            setSearchTerm(e.target.value)
            handleSearch(e.target.value) 
          }} 
          />

        <button 
          className='text-2xl bg-zinc-800 text-white py-3 px-4 rounded'>Search</button>
      </form>

    </div>
  )
}


export default Search