import React from 'react';

function Form() {
  return (
    <div className="form-container">
      <h3>Add New Book Here</h3>
      <form action="#">
        <input type="text" name="titleEl" placeholder="Enter Book Here" />
        <input type="text" name="authorEl" placeholder="Enter Book Author" />
        <button className="submit-btn" type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
