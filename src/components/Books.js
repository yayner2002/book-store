import '../App.css';
import Book from './Book';
import AddBook from './AddBook';
import { addBook } from '../redux/books/books';

const Books = () => (
  <ul>
    <Book />
    <AddBook handleAdd={addBook} />
  </ul>
);

export default Books;
