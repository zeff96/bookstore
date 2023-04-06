import PropTypes from 'prop-types';
import './CreateBook.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooksAsync } from '../redux/books/booksSlice';

const CreateBook = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [percent, setPercent] = useState(64);

  let BookContent;

  const dispatch = useDispatch();

  const handleUpdate = () => {
    let total = percent;
    if (total < 100) {
      setPercent((total += 2));
    }
  };

  if (isEditing) {
    BookContent = (
      <div>
        <label htmlFor="title">
          <input type="text" value={book.title} placeholder="Book title" />
        </label>
        <label htmlFor="author">
          <input type="text" value={book.author} placeholder="Book author" />
        </label>
      </div>
    );
  } else {
    BookContent = (
      <div className="books">
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '50.5rem' }}>
        {BookContent}
        <div className="buttons">
          <button className="comment-btn" type="button">
            comments
          </button>
          <button
            className="delete-btn"
            type="button"
            onClick={() => dispatch(deleteBooksAsync(book.item_id))}
          >
            remove
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="edit-btn"
          >
            {isEditing ? 'save' : 'edit'}
          </button>
        </div>
      </div>
      <div className="progress">
        <div>
          <CircularProgressbar value={percent} className="progress-bar" />
        </div>
        <div>
          <span className="show-progress">{percent}</span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div>
        <h2 className="current-chapter">CURRENT CHAPTER</h2>
        <h3 className="chapter">Chapter 17</h3>
        <button
          type="button"
          className="update-progress"
          onClick={handleUpdate}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

CreateBook.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default CreateBook;
