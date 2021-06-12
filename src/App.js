import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './components/SearchBooks';
import BooksList from './components/BooksList';
class App extends Component {
  state = {
    library: [],
    searchResponse: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ library: books });
    });
  }

  handleSearch = (event) => {
    BooksAPI.search(event.target.value)
      .then((searchResponse) => {
        console.log(searchResponse); // Search Query
        this.shelfState(searchResponse, this.state.library);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ searchResponse: [] });
      });
  };

  // let shelfState of my libraryBooks === search results
  shelfState = (searchResponse, libraryBooks) => {
    const shelfBooks = searchResponse.map((response) => {
      let newResponse = response;
      libraryBooks.map((book) => {
        if (book.id === response.id) {
          newResponse = { ...response, shelf: book.shelf };
        }
        return true; // Avoid Expected to return a value in arrow function array-callback-return
      });

      return newResponse;
    });

    this.setState({ searchResponse: shelfBooks });
  };

  updateShelf = (shelf, id) => {
    BooksAPI.update({ id: id }, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ library: books });
        this.shelfState(this.state.searchResponse, this.state.library);
      });
    });
  };

  searchReset = () => {
    this.setState({ searchResponse: [] });
  };

  render() {
    const { library, searchResponse } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchResponse={searchResponse}
              handleSearch={this.handleSearch}
              updateShelf={this.updateShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BooksList
              books={library}
              updateShelf={this.updateShelf}
              searchReset={this.searchReset}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
