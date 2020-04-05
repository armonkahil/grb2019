/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import { Column, Row } from '../components/Grid'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'
import NoResults from '../components/NoResults'

class Saved extends Component {
  constructor(props) {
    super(props)

    this.state = {
      savedBooks: [],
      loading: false,
      // eslint-disable-next-line react/no-unused-state
      error: ''
    }
  }

  componentDidMount() {
    this.loadSavedBooks()
  }

  loadSavedBooks = () => {
    this.setState({ loading: true })
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res, loading: false })
      })
      .catch(err => console.log(err))
  }

  handleDelete = event => {
    const bookDeleted = event.target.id
    API.deleteBook(bookDeleted)
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        this.loadSavedBooks()
      })
      .catch(err => console.log(err))
  }

  updateBooks = bookSaved => {
    const newBooks = this.state.savedBooks.filter(
      book => bookSaved._id !== book.id
    )
    this.setState({ savedBooks: newBooks, loading: false })
  }

  render() {
    return (
      <div className='container'>
        <Row />
        <Jumbotron
          title='(React) Google Books Search'
          lead='Saved Books of Interest'
        />
        <Row />
        <Column />
        {this.state.savedBooks ? (
          <List>
            {this.state.savedBooks.map(book => (
              <Book
                key={book.etag}
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
                handleDelete={this.handleDelete}
                onClick={() => this.onClick}
              />
            ))}
          </List>
        ) : (
          <NoResults loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default Saved
