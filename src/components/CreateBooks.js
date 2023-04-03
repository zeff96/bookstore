/* eslint-disable react/prop-types */
import './CreateBooks.scss';
import CreateBook from './CreateBook';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const AddBookList = () => (
  <ul className="book-list">
    {books.map((book) => (
      <li key={book.id} className="book-item">
        <CreateBook book={book} title={book.title} author={book.author} />
      </li>
    ))}
  </ul>
);

export default AddBookList;
