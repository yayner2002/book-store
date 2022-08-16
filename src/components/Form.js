import React from 'react';
import './styles/Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addBook(e.target.title.value, e.target.author.value));
    e.target.reset();
  };
  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="my-form" onSubmit={handleAdd}>
        <input type="text" name="title" placeholder="Book title" id="title" />
        <input type="text" name="author" placeholder="Book Author" id="author" />
        <button className="submit-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
