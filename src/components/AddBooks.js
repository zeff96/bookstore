import { useState } from 'react';
import './AddBooks.scss';
import { useDispatch } from './AddBooklist';

let nextId = 0;

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const resetInput = () => {
    setTitle('');
    setAuthor('');
  };

  const dispatch = useDispatch();

  return (
    <div className="add-books">
      <label htmlFor="title">
        <input
          type="text"
          value={title}
          placeholder="Book title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          value={author}
          placeholder="Book author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          if (title === '' && author === '') return;
          dispatch({
            type: 'book_added',
            id: (nextId += 1),
            title,
            author,
          });
          resetInput();
        }}
      >
        ADD BOOK
      </button>
    </div>
  );
};

export default AddBooks;
