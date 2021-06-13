import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
class SearchBooks extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.props.handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchResponse.map((book) => (
                <Book
                  updateShelf={this.props.updateShelf}
                  key={book.id}
                  book={book}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
