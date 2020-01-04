import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import SearchThis from "../components/SearchContainer";
import Column from "../components/Column";
import Book from '../components/BookContainer'
import { List } from "../components/List";
import API from "../utils/API"
import tester from './tester'

class Search extends Component {
  // eslint-disable-next-line
  state = {
    // books: [],
    books: tester,
    search: ""
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  };

  handleSubmit = event => {
    console.log('submit button hit')
    event.preventDefault()
    API.getGoogleSearchBooks(this.state.search)
      .then(res => this.setState({ books: res.data.items })
      )
      .catch(err => console.log(err))
    console.log(this.state.books)
  }
  
  handleSave = bookSaved => {
    console.log(bookSaved)
    console.log('save button hit')
    API.saveBook(bookSaved)
      .then(res => console.log(res))
      .catch(err => console.log(err));
   
  }

  render() {
    return (
      <>
        <Jumbotron
          title="(React) Google Books Search"
          lead="Search for and Save Books of Interest"
        />
        <Row>
          <Column>
            <SearchThis handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
          </Column>
        </Row>
        <Row>
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
                    book={book}
                    value={book}
                    handleSave={() => this.handleSave(
                      {
                      title: book.volumeInfo.title,
                      author: book.volumeInfo.authors,
                      description: book.volumeInfo.description,
                      image: book.volumeInfo.imageLinks.smallThumbnail,
                      link: book.volumeInfo.infoLink,
                      _id: book.id
                    }
                    )}
                  />                
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Column>
        </Row>
      </>
    );
  }
}

export default Search;
