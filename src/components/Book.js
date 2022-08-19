import './styles/Book.css';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
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
          <div className="btn-collection">
            <button
              type="button"
              className="comment-btn"
            >
              Comments
            </button>
            <button
              onClick={() => handleRemove(book.item_id)}
              type="button"
              className="delete-btn"
            >
              Remove
            </button>
            <button
              type="button"
              className="edit-btn"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="completed">
          <span className="oval circular-chart">
            <Progress
              type="circle"
              width={80}
              format={() => ''}
              strokeColor={{
                '0%': '#307bbe',
                '100%': '#379cf6',
              }}
              trailColor="#e8e8e8"
              percent={book.completed}
            />

          </span>

          <div className="percent">
            <span className="actual-percent">{ `${book.completed} %` }</span>
            <span className="completed-text">Completed</span>
          </div>
        </div>
        <div className="chapter">
          <span className="current-chapter">Current Chapter</span>
          <span className="chpater-number">{book.currentLesson}</span>
          <button type="button" className="update-progress-btn">Update Progress</button>
        </div>
      </li>
      <div />
    </>
  );
};

export default Book;
