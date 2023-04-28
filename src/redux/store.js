import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
