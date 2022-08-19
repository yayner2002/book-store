import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import bookReducer from './books/books';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
