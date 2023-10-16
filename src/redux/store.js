import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiSlice from './books/apiSlice/apiSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(apiSlice.middleware),
});

export default store;
