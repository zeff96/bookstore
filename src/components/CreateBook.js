import PropTypes from "prop-types";
import "./CreateBook.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBooksAsync } from "../redux/books/booksSlice";

const CreateBook = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  let BookContent;

  const dispatch = useDispatch();

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
    <div>
      <div>
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
            {isEditing ? "save" : "edit"}
          </button>
        </div>
        <div>
          <h2 className="current-chapter">CURRENT CHAPTER</h2>
        </div>
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
