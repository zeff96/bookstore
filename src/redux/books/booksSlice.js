import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
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
    const response = await axios.post(`${url}/books`, book);
    return response.data;
  },
);

export const deleteBooksAsync = createAsyncThunk(
  'books/deleteBooksAsync',
  async (id) => {
    const response = await axios.delete(`${url}/books/${id}`);
    const books = response.data;
    return { books };
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.books.push(action.payload);
      },
      prepare: (title, author) => ({
        payload: {
          item_id: nanoid(),
          title,
          author,
        },
      }),
    },

    removeBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.item_id === action.payload.id,
      );
      state.books.splice(index, 1);
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
      }));
  },
});

export const selectedBooks = (state) => state.books.books;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
