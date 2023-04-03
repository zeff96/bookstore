import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export default CategoriesSlice.reducer;
