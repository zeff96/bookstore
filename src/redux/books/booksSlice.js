import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j4minPcq1Tx6T5PG7ORZ';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await axios.get(`${url}/books`);
    const { data } = response;
    const books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));
    return { books };
  },
);

export const postBooksAsync = createAsyncThunk(
  'books/postBooksAsync',
  async (book) => {
    await axios.post(`${url}/books`, book);
    return book;
  },
);

export const deleteBooksAsync = createAsyncThunk(
  'books/deleteBooksAsync',
  async (id) => {
    await axios.delete(`${url}/books/${id}`);
    return id;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((b) => b.item_id !== bookId),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getBooksAsync.fulfilled, (state, action) => action.payload)
      .addCase(getBooksAsync.rejected, (state) => ({
        ...state,
        status: 'rejected',
      }))
      .addCase(postBooksAsync.fulfilled, (state, action) => ({
        ...state,
        books: state.books.concat(action.payload),
      }))
      .addCase(deleteBooksAsync.fulfilled, (state, action) => {
        const bookId = action.payload;
        return {
          ...state,
          books: state.books.filter((b) => b.item_id !== bookId),
        };
      });
  },
});

export const selectedBooks = (state) => state.books.books;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
