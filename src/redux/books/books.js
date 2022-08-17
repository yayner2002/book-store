/* eslint-disable no-case-declarations */
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import * as actions from './actionTypes';

const apiKey = 'GOcPcKv5z4FEHRxAelc7';
const apiEndPoint = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const initBooks = [];

export const addBook = (book) => ({
  type: actions.ADD_BOOK,
  payload: book,
});

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
  await axios.get(`${apiEndPoint}/${apiKey}/books`)
    .then((response) => dispatch(addBook(response.data)),
      (err) => dispatch({ type: actions.BOOK_FAILED, payload: err }));
};

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});
