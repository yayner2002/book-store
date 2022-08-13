/* eslint-disable no-underscore-dangle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
