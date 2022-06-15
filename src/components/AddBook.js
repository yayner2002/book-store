import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleForm = () => {
    dispatch(bookAdded({title, author}));
  };

  return (
    <div className="form-container">
      <h3>Add New Book Here</h3>
      <form className="my-form">
        <input type="text" name="titleEl" placeholder="Enter Book Here" />
        <input type="text" name="authorEl" placeholder="Enter Book Author" />
        <button className="submit-btn" type="button" onClick={handleForm}>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
