import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/hooks';
import { setBooksAsync } from '../../redux/books/bookSlice';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: nanoid(),
      title,
      author,
      category: 'action',
    };
    dispatch(setBooksAsync(book));

    setTitle('');
    setAuthor('');
  };

  return (
    <form className="row gap-2" onSubmit={handleSubmit}>
      <div className="col-md-5 col-lg-6">
        <input
          type="text"
          value={title}
          placeholder="Book title"
          className="form-control"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="col-md-3 col-lg-3">
        <input
          type="text"
          value={author}
          placeholder="Book author"
          className="form-control"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className="col-md-3 col-lg-2">
        <button className="btn btn-primary" type="submit">
          Add Book
        </button>
      </div>
    </form>
  );
}
