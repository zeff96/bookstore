import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { useAppDispatch } from '../../hooks/hooks';
import { deleteBooksAsync } from '../../redux/books/bookSlice';

export default function Book({ book }) {
  const [percent, setPercentage] = useState(64);

  const handleClick = () => {
    let increment = percent;
    if (increment < 100) {
      increment += 2;
    }
    setPercentage(increment);
  };

  const dispatch = useAppDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooksAsync(id));
  };

  return (
    <div className="card mb-3 p-3 bg-white">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-6 mb-2 mb-md-0">
          <div className="mb-4">
            <span className="d-block fw-bold">{book.title}</span>
            <span className="text-primary">{book.author}</span>
          </div>
          <div>
            <button
              type="button"
              className="text-primary buttons me-2 border-end pe-3"
            >
              Comments
            </button>
            <button
              type="button"
              onClick={() => handleDelete(book.item_id)}
              className="text-primary buttons me-2 border-end pe-3"
            >
              Remove
            </button>
            <button type="button" className="text-primary buttons">
              Edit
            </button>
          </div>
        </div>
        <div className="col-md-3 col-lg-2 d-flex gap-3 border-end mb-2 mb-md-0 pe-md-3">
          <div>
            <CircularProgressbar value={percent} className="progress_bar" />
          </div>
          <div>
            <span className="d-block fs-3">
              {percent}
              %
            </span>
            <span className="fw-lighter">Completed</span>
          </div>
        </div>
        <div className="col-md-4 clo-lg-3 ps-md-5">
          <span className="d-block mb-1">CURRENT CHAPTER</span>
          <span className="d-block mb-3">Chapter 17</span>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleClick}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};
