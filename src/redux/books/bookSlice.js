import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteBooks, getBooks, setBooks } from '../../api/bookApi';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const setBooksAsync = createAsyncThunk('books/setBooksAsync', (book) => setBooks(book));

export const getBooksAsync = createAsyncThunk('books/getBooksAsync', getBooks);

export const deleteBooksAsync = createAsyncThunk(
  'books/deleteBooksAsync',
  (id) => deleteBooks(id),
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setBooksAsync.fulfilled, (state, action) => ({
        ...state,
        books: state.books.concat(action.payload),
      }))
      .addCase(getBooksAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getBooksAsync.fulfilled, (state, action) => {
        const data = action.payload;
        const books = Object.keys(data).map((key) => ({
          ...data[key][0],
          item_id: key,
        }));
        return {
          ...state,
          books,
          status: 'completed',
          error: null,
        };
      })
      .addCase(getBooksAsync.rejected, (state, action) => ({
        ...state,
        status: 'completed',
        error: action.error,
      }))
      .addCase(deleteBooksAsync.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export const selectBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

export default bookSlice.reducer;
