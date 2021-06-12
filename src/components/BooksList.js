import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BooksList extends Component {
  state = {};
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add Book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksList;
