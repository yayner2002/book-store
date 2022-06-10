import '../App.css';
// import Book from './Book';

function Books() {
  const bookList = [
    {
      id: 1,
      title: 'html',
      author: 'yay',
    },
    {
      id: 2,
      title: 'css',
      author: 'yay',
    },
    {
      id: 3,
      title: 'database',
      author: 'yay',
    },
  ];
  return (
    <ul>
      {bookList.map((book) => (
        <li key={bookList.id}>
          {book.title}
          {' by '}
          {book.author}
        </li>
      ))}
    </ul>
  );
}

export default Books;
