import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  selectBooks,
  selectStatus,
  selectError,
  getBooksAsync,
} from '../../redux/books/bookSlice';
import Book from './book';

function Books() {
  const books = useAppSelector(selectBooks);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  const listBooks = books.map((book) => (
    <Book key={book.item_id} book={book} />
  ));

  return (
    <div>
      {status === 'loading' && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {books && <div>{listBooks}</div>}
    </div>
  );
}

export default React.memo(Books);
