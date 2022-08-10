import React from 'react';
import './styles/Form.css';

const Form = () => (
  <div className="form-container">
    <h3>Add New Book Here</h3>
    <form className="my-form">
      <input type="text" name="titleEl" placeholder="Enter Book title Here" />
      <input type="text" name="authorEl" placeholder="Enter Book Author Here" />
      <button className="submit-btn" type="button">Add Book</button>
    </form>
  </div>
);

export default Form;
