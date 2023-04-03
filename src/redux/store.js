import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
  },
});
