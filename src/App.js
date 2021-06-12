import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BooksList from './components/BooksList';
import SearchBook from './components/SearchBook';

class BooksApp extends Component {
  state = {
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <SearchBook /> : <BooksList />}
      </div>
    );
  }
}

export default BooksApp;
