import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import SearchThis from '../components/SearchContainer'
import Column from '../components/Column'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'

// Search Page
function Search() {
  // hooks
  const [books, setBooks] = useState('')
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    // if search field is empty, stop.
    if (!search) {
      return
    }
    // Axios call to source Google Books API
    API.getGoogleSearchBooks(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error('No results found.')
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message)
        }
        // set response data to books
        setBooks(res.data.items)
        console.log(res.data.items)
      })
      .catch(err => console.log(err))
    // [Search] =  run every time search is updated
  }, [search])

  // handle input field changes
  const handleInputChange = event => {
    setInput(event.target.value)
    console.log(search)
  }
  // handle search Button event
  const handleSetSubmit = event => {
    console.log(event.target)
    setSearch(input)
  }
// handle save book button event
  const handleSave = bookSaved => {
    console.log('save button hit')
    console.log('book Saved', bookSaved)
// Source Axios to send data to MongoDB
    API.saveBook(bookSaved)
      .then(res => {
        console.log(res)
        // update books
        updateBooks(bookSaved)
      })
      .catch(err => console.log(err.response))
  }
        // update books hook
  const updateBooks = bookSaved => {
    console.log('bookSaved:', bookSaved)
    const newBooks = books.filter(book => bookSaved._id !== book.id)
    setBooks(newBooks)
  }

  return (
    <>
      {/* Title Banner */}
      <Jumbotron
        title='(React) Google Books Search'
        lead='Search for and Save Books of Interest'
      />
      <Row spacing={'justify-content-center mx-auto my-3'}>
        <Column>
          {/* Search Container */}
          <SearchThis
            handleInputChange={handleInputChange}
            handleSubmit={handleSetSubmit}
          />
        </Column>
      </Row>
      {/* Results Container */}
      <Row spacing={'justify-content-center mx-auto my-3'}>
        <Column>
          {/* if books contains data */}
          {books.length ? (
            <List>
              {books.map(book => (
                <Book
                  key={book.id}
                  id={book.id}
                  link={book.volumeInfo.previewLink}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  // Convert Authors array to a string
                  authors={
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(', ')
                      : ''
                  }
                  description={book.volumeInfo.description}
                  // if thumbnail is empty
                  thumbnail={
                    book.volumeInfo.imageLinks.thumbnail ||
                    book.volumeInfo.imageLinks.smallThumbnail
                  }
                  saved={false}
                  book={book}
                  value={book}
                  handleSave={() =>
                    handleSave({
                      _id: book.id,
                      title: book.volumeInfo.title,
                      authors: book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(', ')
                        : '',
                      description: book.volumeInfo.description,
                      image:
                        book.volumeInfo.imageLinks.thumbnail ||
                        book.volumeInfo.imageLinks.smallThumbnail,
                      link: book.volumeInfo.infoLink,
                      saved: true
                    })
                  }
                />
              ))}
            </List>
          ) : (
            <h3 className='text-center'>No Results to Display</h3>
          )}
        </Column>
      </Row>
    </>
  )
}

export default Search
