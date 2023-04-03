import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push("Under construction");
      }
    },
  },
});

export const { checkStatus } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
