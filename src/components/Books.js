import '../App.css';
import { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const [book, setBook] = useState({
    id: 1,
    title: 'Title',
    author: 'Author',
  });
  const addBook = () => {
    setBook({
      ...book, ...book,
    });
  };

  return (
    <ul>
      <Book bookInfo={book} />
      <AddBook handleAdd={addBook} />
    </ul>
  );
};

export default Books;
