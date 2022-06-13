import { createStore, combineReducers } from 'redux';

import booksReducer from './books/books';
import categoriersReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriersReducer,

});

const store = createStore(rootReducer);