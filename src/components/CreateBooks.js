/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CreateBooks.scss";
import { useBooks, useDispatch } from "./AddBooklist";

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

export default AddBookList;
