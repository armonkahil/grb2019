import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Column from '../components/Column'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'
import NoResults from '../components/NoResults'
class Saved extends Component {
  state = {
    savedBooks: [],
    loading: false,
    error: ''
  }

  componentDidMount() {
    this.loadSavedBooks()
    console.log(this.state.savedBooks)
  }

  loadSavedBooks = () => {
    this.setState({ loading: true })
    API.getBooks()
      .then(res => {
        this.setState({ savedBooks: res, loading: false })
        console.log(this.state.savedBooks)
      })
      .catch(err => console.log(err))
  }

  handleDelete = event => {
    console.log(event.target.id)
    const bookDeleted = event.target.id
    API.deleteBook(bookDeleted)
      .then(res => {
        console.log(res)
        this.loadSavedBooks()
      })
      .catch(err => console.log(err))
  }

  updateBooks = bookSaved => {
    const newBooks = this.state.savedBooks.filter(
      book => bookSaved._id !== book.id
    )
    this.setState({ savedBooks: newBooks, loading: false })
    console.log(newBooks)
  }
  
  render() {
    return (
      <>
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
      </>
    )
  }
}

export default Saved
