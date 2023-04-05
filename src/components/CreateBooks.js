import './CreateBooks.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CreateBook from './CreateBook';
import { selectedBooks, getBooksAsync } from '../redux/books/booksSlice';

const AddBookList = () => {
  const books = useSelector(selectedBooks);
  const { status } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getBooksAsync());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <h3>Loading...</h3>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.item_id} className="book-item">
          <CreateBook book={book} />
        </li>
      ))}
    </ul>
  );
};

export default AddBookList;
