/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import './styles/Form.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: e.target.title.value.trim(),
      author: e.target.author.value.trim(),
      category: e.target.category.value.trim(),
    };
    dispatch(postBook(newBook));
    e.target.reset();
  };
  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form className="my-form" onSubmit={handleAdd}>
        <input type="text" name="title" placeholder="Book title" id="title" required />
        <input type="text" name="author" placeholder="Book Author" id="author" required />
        <select name="category" id="category" className="selectCategory">
          <option>Select Category...</option>
          <option value="Technology">Technology</option>
          <option value="Fiction">Fiction</option>
          <option value="Adventure">Adventure</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>
        <button className="submit-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
