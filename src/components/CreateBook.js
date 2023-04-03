const CreateBook = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);
  let BookContent;

  if (isEditing) {
    BookContent = (
      <div>
        <label htmlFor="title">
          Title:
          {' '}
          <input type="text" value={book.title} placeholder="Book title" />
        </label>
        <label htmlFor="author">
          Author:
          {' '}
          <input type="text" value={book.author} placeholder="Book author" />
        </label>
      </div>
    );
  } else {
    BookContent = (
      <div className="books">
        <p>{book.title}</p>
        <p>{book.author}</p>
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
          {isEditing ? 'save' : 'edit'}
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
