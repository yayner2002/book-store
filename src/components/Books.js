import React from 'react';
import '../App.css';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  return (
    <ul>
      <Book />
      <AddBook />
    </ul>
  );
}

export default Books;
