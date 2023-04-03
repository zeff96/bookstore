/* eslint-disable react/prop-types */
import "./CreateBooks.scss";
import CreateBook from "./CreateBook";

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
