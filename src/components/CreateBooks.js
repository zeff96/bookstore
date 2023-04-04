/* eslint-disable react/prop-types */
import "./CreateBooks.scss";
import CreateBook from "./CreateBook";
import { selectedBooks } from "../redux/books/booksSlice";

const AddBookList = () => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <CreateBook book={book} title={book.title} author={book.author} />
        </li>
      ))}
    </ul>
  );
};

export default AddBookList;
