/* eslint-disable react/prop-types */
import './CreateBooks.scss';
import { useSelector } from 'react-redux';
import CreateBook from './CreateBook';
import { selectedBooks } from '../redux/books/booksSlice';

const AddBookList = () => {
  const books = useSelector(selectedBooks);
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.item_id} className="book-item">
          <CreateBook
            book={book}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default AddBookList;
