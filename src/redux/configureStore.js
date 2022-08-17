import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
