import { useEffect } from 'react';
import './styles/Book.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, removeBook } from '../redux/books/books';

const Book = () => {
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();
  window.console.log(`book info${book}`);

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    book.map((bookEl) => (
      <li key={bookEl.id} className="bookList">
        <div className="bookItem">
          <p className="BookCategory">{bookEl.category}</p>
          <h3>{bookEl.title}</h3>
          <small>{bookEl.author}</small>
          <button
            type="button"
            className="delete-btn"
            onClick={() => handleRemove(bookEl.id)}
          >
            Remove
          </button>
        </div>
      </li>
    ))

  );
};

export default Book;
