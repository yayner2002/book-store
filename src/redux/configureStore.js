import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriersReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriersReducer,
});

const store = configureStore({ reducer: rootReducer });
// export default createStore((state, action) => rootReducer(state, action), initialData);
export default store;
