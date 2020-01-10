import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import SearchThis from '../components/SearchContainer'
import Column from '../components/Column'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'

function Search() {
  const [books, setBooks] = useState('')
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    if (!search) {
      return
    }
    API.getGoogleSearchBooks(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error('No results found.')
        }
        if (res.data.status === 'error') {
          throw new Error(res.data.message)
        }
        setBooks(res.data.items)
      })
      .catch(err => console.log(err))
  }, [search])
  // handle any changes to the input fields
  const handleInputChange = event => {
    setInput(event.target.value)
    console.log(search)
  }

  const handleSetSubmit = event => {
    console.log(event)
    setSearch(input)
  }

  const handleSave = bookSaved => {
    console.log('save button hit')
    console.log('book Saved', bookSaved)

    API.saveBook(bookSaved)
      .then(res => {
        console.log(res)
        updateBooks(bookSaved)
      })
      .catch(err => console.log(err.response))
  }

  const updateBooks = bookSaved => {
    console.log('bookSaved:', bookSaved)
    const newBooks = books.filter(book => bookSaved._id !== book.id)
    setBooks(newBooks)
  }

  return (
    <>
      <Jumbotron
        title='(React) Google Books Search'
        lead='Search for and Save Books of Interest'
      />
      <Row spacing={'justify-content-center mx-auto my-3'}>
        <Column>
          <SearchThis
            handleInputChange={handleInputChange}
            handleSubmit={handleSetSubmit}
          />
        </Column>
      </Row>
      <Row spacing={'justify-content-center mx-auto my-3'}>
        <Column>
          {books.length ? (
            <List>
              {books.map(book => (
                <Book
                  key={book.id}
                  id={book.id}
                  link={book.volumeInfo.previewLink}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  authors={
                    book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(', ')
                      : ''
                  }
                  description={book.volumeInfo.description}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail}
                  smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
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
                      image: book.volumeInfo.imageLinks.thumbnail,
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
