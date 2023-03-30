/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';
import booksReducer from './BookReducer';

const BooksContext = createContext(null);
const DispatchContext = createContext(null);

const BookList = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, []);

  return (
    <BooksContext.Provider value={books}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
export const useDispatch = () => useContext(DispatchContext);

export default BookList;
