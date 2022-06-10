import '../App.css';
import React from 'react';

function Book(props) {
  // eslint-disable-next-line react/prop-types
  const { title, author } = props;
  return (
    <li>
      {title}
      {author}
      <button type="button">Delete</button>
    </li>
  );
}

export default Book;
