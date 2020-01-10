import React, { useState, useEffect } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Column from '../components/Column'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'
// import { SaveBtn, ViewBtn } from '../components/Buttons'

function Saved({ onClick }) {
  const [savedBooks, setSavedBooks] = useState('')

  useEffect(() => {
    API.getBooks()
      .then(res => {
        setSavedBooks(res)
      })
      .catch(err => console.log(err))
  }, [savedBooks])

  const handleDelete = event => {
    console.log(event.target.id)
    API.deleteBook(event.target.id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <>
      <Jumbotron
        title='(React) Google Books Search'
        lead='Saved Books of Interest'
      />
      <Row>
        <Column>
          {savedBooks ? (
            <List>
              {savedBooks.map(book => (
                <Book
                  key={book._id}
                  id={book._id}
                  link={book.link}
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                  description={book.description}
                  thumbnail={book.image}
                  book={book}
                  value={book}
                  saved={book.saved}
                  handleDelete={handleDelete}
                  onClick={onClick}
                ></Book>
              ))}
            </List>
          ) : (
            <h3 className='text-center text-light'>No Results to Display</h3>
          )}
        </Column>
      </Row>
    </>
  )
}

export default Saved
