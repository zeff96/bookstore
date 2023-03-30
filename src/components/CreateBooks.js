/* eslint-disable react/prop-types */
import { useState } from 'react';
import './CreateBooks.scss';
import { useBooks, useDispatch } from './AddBooklist';

const AddBookList = () => {
  const books = useBooks();
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <CreateBook book={book} />
        </li>
      ))}
    </ul>
  );
};

const CreateBook = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  let BookContent;

  if (isEditing) {
    BookContent = (
      <div>
        <label htmlFor="title">
          Title:
          {' '}
          <input
            type="text"
            value={book.title}
            placeholder="Book title"
            onChange={(e) => {
              dispatch({
                type: 'book_changed',
                book: {
                  ...book,
                  title: e.target.value,
                },
              });
            }}
          />
        </label>
        <label htmlFor="author">
          Author:
          {' '}
          <input
            type="text"
            value={book.author}
            placeholder="Book author"
            onChange={(e) => {
              dispatch({
                type: 'book_changed',
                book: {
                  ...book,
                  author: e.target.value,
                },
              });
            }}
          />
        </label>
      </div>
    );
  } else {
    BookContent = (
      <div className="books">
        <p>{book.title}</p>
        <p>{book.author}</p>
      </div>
    );
  }

  return (
    <div>
      {BookContent}
      <div className="buttons">
        <button type="button">comments</button>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: 'book_removed',
              id: book.id,
            });
          }}
        >
          remove
        </button>
        <button type="button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'save' : 'edit'}
        </button>
      </div>
    </div>
  );
};

export default AddBookList;
