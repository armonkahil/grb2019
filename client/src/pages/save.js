import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import Row from '../components/Row'
import Column from '../components/Column'
import Book from '../components/BookContainer'
import { List } from '../components/List'
import API from '../utils/API'
import Spinner from '../components/Spinner'
// import { SaveBtn, ViewBtn } from '../components/Buttons'

class Saved extends Component {
  state = {
    savedBooks: [],
    loading: false
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
      })
      .catch(err => console.log(err))
  }

  handleDelete = event => {
    console.log(event.target.id)
    API.deleteBook(event.target.id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    let gettingBooks
    if (this.state.loading) {
      gettingBooks = <Spinner />
    }

    return (
      <>
        <Jumbotron
          title='(React) Google Books Search'
          lead='Saved Books of Interest'
        />
        <Row>
          <Column>
            {gettingBooks}
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
                    onClick={this.onClick}
                  />
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
}

export default Saved
