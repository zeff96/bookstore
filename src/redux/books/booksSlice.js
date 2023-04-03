import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const index = state.books.find((b) => b.id === action.payload.id);
      state.books.splice(index, 1);
    },
  },
});

export default booksSlice.reducer;
