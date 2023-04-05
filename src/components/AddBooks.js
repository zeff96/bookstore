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
    dispatch(
      postBooksAsync({
        item_id: nanoid(),
        title,
        author,
        category: 'action',
      }),
    );
    resetForm();
  };

  return (
    <div className="add-books">
      <label htmlFor="title">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
        />
      </label>
      <button type="button" onClick={handleAddClick} disabled={!canAdd}>
        ADD BOOK
      </button>
    </div>
  );
};

export default AddBooks;
