import '../App.css';
import { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const [book, setBook] = useState({
    title: 'This is my first title',
    author: 'this is sample author',
  });
  const { title, author } = book;

  return (
    <ul>
      <Book title={title} author={author} />
      <AddBook />
    </ul>
  );
}

export default Books;
