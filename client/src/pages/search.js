import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import SearchThis from "../components/SearchContainer";
import Column from "../components/Column";
import Book from '../components/BookContainer'
import { List } from "../components/List";
import API from "../utils/API"


class Search extends Component {
  state = {
    books: []
  }
  
  // handle any changes to the input fields
  handleInputChange = event => {
    this.setState({ search: event.target.value })
    console.log(this.state.search)
  }

  handleSubmit = event => {
    console.log('submit button hit')
    event.preventDefault()
    if (this.state.search === undefined) {
      console.log('button hit')
    } else {
      API.getGoogleSearchBooks(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err))
      console.log(this.state.books)
  }
}

  handleSave = bookSaved => {
    console.log('save button hit')
    console.log('book Saved', bookSaved)
  
    API.saveBook(bookSaved)
      .then(res => {
        console.log(res)
        this.updateBooks(bookSaved)  
      } 
      )
      .catch(err => console.log(err))
  }

  updateBooks = bookSaved => {
    console.log('bookSaved:', bookSaved)
    const newBooks = this.state.books.filter(book => bookSaved._id !== book.id)
    this.setState({books: newBooks})
  }

  render() {
    return (
      <>
        <Jumbotron
          title='(React) Google Books Search'
          lead='Search for and Save Books of Interest'
        />
        <Row spacing={'justify-content-center mx-auto my-3'}>
          <Column>
            <SearchThis
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
          </Column>
        </Row>
        <Row spacing={'justify-content-center mx-auto my-3'}>
          <Column>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    id={book.id}
                    link={book.volumeInfo.previewLink}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors.join(', ')}
                    description={book.volumeInfo.description}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                    saved={false}
                    book={book}
                    value={book}
                    handleSave={() =>
                      this.handleSave({
                        _id: book.id,
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors.join(', '),
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
}

export default Search;
