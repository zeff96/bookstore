import Books from '../books/books';
import Form from '../form/form';

export default function Homepage() {
  return (
    <div className="pt-5 mt-5">
      <Books />
      <Form />
    </div>
  );
}
