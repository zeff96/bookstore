import React from 'react';
import { useGetBooksQuery } from '../../redux/books/bookSlice';
import Book from './book';

function Books() {
  const {
    data: { books = [] } = {},
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetBooksQuery();

  const listBooks = books.map((book) => (
    <Book key={book?.item_id} book={book} />
  ));

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{error.message}</h3>}
      {isSuccess && <div>{listBooks}</div>}
    </div>
  );
}

export default React.memo(Books);
