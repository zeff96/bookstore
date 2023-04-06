import './AddBooks.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { postBooksAsync } from '../redux/books/booksSlice';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setTitle('');
    setAuthor('');
  };

  const canAdd = Boolean(title) && Boolean(author);

  const handleAddClick = () => {
    const book = {
      item_id: nanoid(),
      title,
      author,
      category: 'action',
    };
    dispatch(postBooksAsync(book));
    resetForm();
  };

  return (
    <div className="wrapper">
      <h1>ADD NEW BOOK</h1>
      <div className="add-books">
        <label htmlFor="title">
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="title-input"
          />
        </label>
        <label htmlFor="author">
          <input
            type="text"
            placeholder="Book author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="author-input"
          />
        </label>
        <button type="button" onClick={handleAddClick} disabled={!canAdd}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
