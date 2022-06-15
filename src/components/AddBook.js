import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleForm = () => {
    dispatch(bookAdded({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h3>Add New Book Here</h3>
      <form className="my-form" onSubmit={handleForm}>
        <input className="form-control" type="text" name="title" placeholder="Enter Book Here" onChange={handleTitle} />
        <input className="form-control" type="text" name="author" placeholder="Enter Book Author" onChange={handleAuthor} />
        <button className="submit-btn" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
