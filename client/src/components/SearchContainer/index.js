import React from 'react'
import { SearchBtn } from '../Buttons'

function SearchThis(props) {
  return (
    <div className='card card-body'>
      <div className='row container-fluid'>
        <div className='card-title text-left'>
          <h1>Book Search</h1>
        </div>
      </div>
      <div className='row container-fluid'>
        <div className='card-body text-center'>
          <input
            className='form-control'
            type='text'
            placeholder='Search for a Book...'
            name='search'
            value={props.search}
            onChange={props.handleInputChange}
          ></input>
        </div>
        <SearchBtn handleSubmit={props.handleSubmit} />
      </div>
    </div>
  )
}

export default SearchThis
