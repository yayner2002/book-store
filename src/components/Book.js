/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import '../App.css';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bookRemoved } from '../redux/books/books';


function Book(props) {
  const { id, title, author } = props.bookInfo;
  return (
    <li key={id}>
      <div className="bookItem">
        {title}
        { }
        {' '}
        by
        {' '}
        {' '}
        {author}
        <button type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default Book;
