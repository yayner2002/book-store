import '../App.css';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { addBook } from '../redux/books/Books';

const Books = () => {
  const book = useSelector((state) => state.book);
  // const [book, setBook] = useState({
  //   id: 1,
  //   title: 'Title',
  //   author: 'Author',
  // });
  // const addBook = () => {
  //   setBook({
  //     ...book, ...book,
  //   });
  // };

  return (
    <ul>
      <Book bookInfo={book} />
      <AddBook handleAdd={addBook} />
    </ul>
  );
};

export default Books;
