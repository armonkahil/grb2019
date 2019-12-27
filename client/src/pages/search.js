import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Row from "../components/Row";
import SearchThis from "../components/SearchContainer";
import Column from "../components/Column";
import Book from '../components/BookContainer'
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
class Search extends Component {
  state = {
    books: []
  };
  render() {
    return (
      <>
        <Jumbotron />
        <Row>
          <Column>
            <SearchThis />
          </Column>
        </Row>
        <Row>
          <Column>
            {this.state.books.length ? (
              <List>

                {this.state.books.map(book => (
                  <Book key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </Book>
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
