import React from 'react';
import './styles/Form.css';

const Form = () => (
  <div className="form-container">
    <h3>ADD NEW BOOK</h3>
    <form className="my-form">
      <input type="text" name="titleEl" placeholder="Book title" />
      <input type="text" name="authorEl" placeholder="Book Author" />
      <button className="submit-btn" type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
