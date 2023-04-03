import './AddBooks.scss';

const AddBooks = () => (
  <div className="add-books">
    <label htmlFor="title">
      <input type="text" value={title} placeholder="Book title" />
    </label>
    <label htmlFor="author">
      <input type="text" value={author} placeholder="Book author" />
    </label>
    <button type="button">ADD BOOK</button>
  </div>
);

export default AddBooks;
