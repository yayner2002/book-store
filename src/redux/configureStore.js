import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
