import "./AddBooks.scss";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

const AddBooks = () => (
  <div className="add-books">
    <label htmlFor="title">
      <input type="text" placeholder="Book title" />
    </label>
    <label htmlFor="author">
      <input type="text" placeholder="Book author" />
    </label>
    <button type="button">ADD BOOK</button>
  </div>
);

export default AddBooks;
