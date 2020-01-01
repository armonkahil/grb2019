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
  }
  
  handleSave = event => {
    console.log('save button hit')
    API.saveBook(event)
    .then(res=> console.log(res))
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
                    selfLink={book.selfLink}
                    id={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors.join(', ')}
                    description={book.volumeInfo.description}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                    book={book}
                    handleSave={this.handleSave}
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
