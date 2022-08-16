import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
