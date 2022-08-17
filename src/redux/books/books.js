/* eslint-disable no-case-declarations */
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';
import * as actions from './actionTypes';

const apiKey = 'GOcPcKv5z4FEHRxAelc7';
const apiEndPoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const initBooks = [];

export const addBook = (book) => ({
  type: actions.ADD_BOOK,
  payload: book,
});

export const postBook = (book) => async (dispatch) => {
  fetch(`${apiEndPoint}/${apiKey}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: book,
  })
    .then((response) => response.json())
    .then(() => dispatch(addBook()));
};

const bookReducer = (state = initBooks, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      const books = Object.entries(action.payload);
      return books.map((book) => ({
        id: book[0],
        ...book[1][0],
      }));
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};
export default bookReducer;

export const fetchBook = () => async (dispatch) => {
  fetch(`${apiEndPoint}/${apiKey}/books`)
    .then((response) => response.json())
    .then((data) => dispatch(addBook(data)));
};

export const removeBook = (id) => async (dispatch) => {
  fetch(`${apiEndPoint}/${apiKey}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(() => dispatch(addBook()));
};
