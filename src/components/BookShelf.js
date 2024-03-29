import React from 'react';
import Book from './Book';

const BookShelf = ({ updateShelf, title, ShelfBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {ShelfBooks.map((book) => (
            <Book updateShelf={updateShelf} key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
