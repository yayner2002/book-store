/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'GOcPcKv5z4FEHRxAelc7';
const apiEndPoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const fetchBooks = createAsyncThunk(
  'fetchBook',
  async () => {
    const response = await axios.get(`${apiEndPoint}/${apiKey}/books`);
    return response.data;
  },
);

export const postBook = createAsyncThunk('postBook', async (book) => {
  const response = await axios.post(`${apiEndPoint}/${apiKey}/books`, {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  return response.data;
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  const response = await axios.delete(`${apiEndPoint}/${apiKey}/books/${id}`);
  return response.data;
});

const initialState = [];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      window.console.log(`api data ${action.payload}, ${state.books}`);
      const books = Object.keys(action.payload)
        .map((instance) => ({
          item_id: instance,
          ...action.payload[instance][0],
        }));
      return [books];
    },
    [postBook.fulfilled]: (state, action) => [...state, action.payload],
    [removeBook.fulfilled]: (state, action) => [...state.filter((book) => book.item_id !== action.payload.item_id)],

  },
});
export default booksSlice.reducer;
