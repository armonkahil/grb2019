import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import SearchThis from '../components/SearchContainer'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'
import NoResults from '../components/NoResults'
import openSocket from 'socket.io-client'
const socket = openSocket('https://googlereactbooks1.herokuapp.com/')

// Search Page
function Search() {
  // hooks
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  useEffect(() => {
    // if search field is empty, stop.
    if (!search) {
      return
    }
    setLoading(true)
    // Axios call to source Google Books API
    API.getGoogleSearchBooks(search)
      .then(res => {
        if (res.data.totalItems === 0) {
          alert('No results found.')
          setLoading(false)
          throw new Error('No results found.')
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message)
        }
        // set response data to books
        setBooks(res.data.items)
        setLoading(false)
      })
      .catch(err => console.log(err))
    // [Search] =  run every time search is updated
  }, [search])

  // handle input field changes
  const handleInputChange = event => {
    const newInput = event.target.value.trim().replace(/\s/g, '+')
    setInput(newInput)
  }
  // handle search Button event
  const handleSetSubmit = event => {
    event.preventDefault()
    setBooks([])
    setSearch(input)
  }
  // handle save book button event
  const handleSave = bookSaved => {
    // Source Axios to send data to MongoDB
    API.saveBook(bookSaved)
      .then(res => {
        // update books
        updateBooks(bookSaved)
        socket.emit('bookSaved', {
          message: 'A book has been saved'
        })
      })
      .catch(err => {
        setError(err)
        err.response.data.code === 11000 ? alert('Book already saved') : setError(err)
      })
  }
  const httpsConverter = link => {
    return 'https' + link.substr(4, link.length - 1)
  }
  // update books hook
  const updateBooks = bookSaved => {
    const newBooks = books.filter(book => bookSaved._id !== book.id)
    setBooks(newBooks)
  }

  return (
    <>
      {/* Title Banner */}
      <Jumbotron title='(React) Google Books Search' lead='Search for and Save Books of Interest' />
      <Row spacing={'justify-content-center mx-auto my-3'} />

      {/* Search Container */}
      <SearchThis handleInputChange={handleInputChange} handleSubmit={handleSetSubmit} />
      {/* Results Container */}
      <Row spacing={'justify-content-center mx-auto my-3'} />

      {/* if books contains data */}
      {books.length ? (
        <List>
          {books.map(book => (
            <Book
              key={book.etag}
              id={book.id}
              link={book.volumeInfo.previewLink}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              // Convert Authors array to a string
              authors={
                book.volumeInfo.authors
                  ? ` Written by ${book.volumeInfo.authors.join(', ')}`
                  : 'No authors listed'
              }
              description={
                book.volumeInfo.description ? book.volumeInfo.description : 'No Description'
              }
              thumbnail={
                // // if book.volume.imageLinks exist
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbNail
                    ? httpsConverter(book.volumeInfo.imageLinks.thumbNail)
                    : httpsConverter(book.volumeInfo.imageLinks.smallThumbnail)
                  : 'https://books.google.com/googlebooks/images/no_cover_thumb_with_curl.gif'
              }
              saved={false}
              book={book}
              value={book}
              handleSave={() =>
                handleSave({
                  _id: book.id,
                  etag: book.etag,
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors
                    ? ` Written by ${book.volumeInfo.authors.join(', ')}`
                    : 'No authors listed',
                  description: book.volumeInfo.description
                    ? book.volumeInfo.description
                    : 'No Description provided',
                  image: book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbNail
                      ? httpsConverter(book.volumeInfo.imageLinks.thumbNail)
                      : httpsConverter(book.volumeInfo.imageLinks.smallThumbnail)
                    : 'https://books.google.com/googlebooks/images/no_cover_thumb_with_curl.gif',
                  link: book.volumeInfo.infoLink,
                  saved: true
                })
              }
            />
          ))}
        </List>
      ) : (
        <NoResults loading={loading} />
      )}
    </>
  )
}

export default Search
