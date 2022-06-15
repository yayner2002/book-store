import { combineReducers, createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriersReducer from './categories/categories';
import initialData from './books/initialData';

const rootReducer = combineReducers({
  counter: booksReducer,
  categories: categoriersReducer,
});

// const store = configureStore({ reducer: rootReducer });
export default createStore((state, action) => rootReducer(state, action), initialData);
// export default store;
