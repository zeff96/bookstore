import BookList from './AddBooklist';
import AddBookList from './CreateBooks';
import AddBooks from './AddBooks';

const RenderBooks = () => (
  <BookList>
    <AddBookList />
    <AddBooks />
  </BookList>
);

export default RenderBooks;
