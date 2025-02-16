import React from 'react'

const Search = ({ setSearchTerm, searchTerm }) => {
    // never mutate state and props 
   
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />

            <input type="text" name="" placeholder='Search Through thousands of movies' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} id="" />
        </div>
    </div>
    )
}

export default Search