/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import '../App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

function Book() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(bookRemoved(id));
  };
  return (
    <li className="bookList">
      <div className="singleBookContainer">
        <span>
          {bookList.map((book) => (
            <div key={book.id} className="singleBook">
              {book.title}
              {' '}
              :
              {' '}
              {book.author}
              <button
                type="button"
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                Delete Book
              </button>
            </div>
          ))}
        </span>
      </div>
    </li>
  );
}

export default Book;
