import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
