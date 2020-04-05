import React from 'react'
import { SearchBtn } from '../Buttons'

const SearchThis = ({ search, handleInputChange, handleSubmit }) => {
  return (
    <div className='card card-body text-center'>
      <h1 className='card-title'>Book Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='text'
          placeholder='Search for a Book...'
          name='search'
          value={search}
          onChange={handleInputChange}
        />
        <SearchBtn handleSubmit={handleSubmit} />
      </form>
    </div>
  )
}

export default SearchThis
