import './styles/Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <li key={book.item_id} className="bookList">
        <div className="bookItem">
          <p className="BookCategory">{book.category}</p>
          <h3>{book.title}</h3>
          <small>{book.author}</small>
          <button
            onClick={() => handleRemove(book.item_id)}
            type="button"
            className="delete-btn"
          >
            Remove
          </button>
        </div>
      </li>
      <div />
    </>
  );
};

export default Book;
