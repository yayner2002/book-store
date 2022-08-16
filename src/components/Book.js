import React from 'react';
import './styles/Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return props.bookInfo.map((book) => (
    <li key={book.id} className="bookList">
      <div className="bookItem">
        <h3>{book.title}</h3>
        <small>{book.author}</small>
        <button
          type="button"
          className="delete-btn"
          onClick={() => handleRemove(book.id)}

        >
          Remove
        </button>
      </div>
    </li>
  ));
};

export default Book;
