import React from 'react';
import './styles/Book.css';

const Book = (props) => {
  const { id, title, author } = props.bookInfo;
  return (
    <li key={id} className="bookList">
      <div className="bookItem">
        <span>
          {title}
          { }
          {' '}
          by
          {' '}
          {' '}
          {author}

        </span>
        <button type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Book;
