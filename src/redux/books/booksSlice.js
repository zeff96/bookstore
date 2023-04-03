import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export default booksSlice.reducer;
