import React from 'react';
import './styles/Book.css';

const Book = (props) => {
  // const { id, title, author } = props.bookInfo;
  window.console.log(props.bookInfo);
  return (
    props.bookInfo.map((book) => (
      <li key={book.id} className="bookList">
        <div className="bookItem">
          <h3>{book.title}</h3>
          <small>{book.author}</small>
          <button type="button" className="delete-btn">Remove</button>
        </div>
      </li>
    ))

  );
};

export default Book;
