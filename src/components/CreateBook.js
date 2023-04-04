/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateBook = ({ title, author }) => {
  const [isEditing, setIsEditing] = useState(false);
  let BookContent;

  const dispatch = useDispatch();

  if (isEditing) {
    BookContent = (
      <div>
        <label htmlFor="title">
          <input type="text" value={title} placeholder="Book title" />
        </label>
        <label htmlFor="author">
          <input type="text" value={author} placeholder="Book author" />
        </label>
      </div>
    );
  } else {
    BookContent = (
      <div className="books">
        <p>{title}</p>
        <p>{author}</p>
      </div>
    );
  }

  return (
    <div>
      {BookContent}
      <div className="buttons">
        <button type="button">comments</button>
        <button type="button">remove</button>
        <button type="button" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "save" : "edit"}
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
