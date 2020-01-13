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
  componentWillUnmount(book) {
    this.updateBooks(book)
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
    const bookDeleted =  event.target.id
    API.deleteBook(bookDeleted)
      .then(res => {
        console.log(res)
        this.loadSavedBooks()
      })
      .catch(err => console.log(err))
  }
 updateBooks = bookSaved => {
    const newBooks = this.state.savedBooks.filter(book => bookSaved._id !== book.id)
   this.setState({ savedBooks: newBooks, loading: false })
  }
  
  render() {
    let gettingBooks
    if (this.state.loading) {
      gettingBooks = <Spinner />
    } else {
      gettingBooks = (
        <h3 className='text-center text-light'>No Results to Display</h3>
      )
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
                    onClick={() => this.onClick}
                  />
                ))}
              </List>
            ) : (
              { gettingBooks }
            )}
          </Column>
        </Row>
      </>
    )
  }
}

export default Saved
