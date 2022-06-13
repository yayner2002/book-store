import * as actions from './actionTypes';

let lastId = 0;
// reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case actions.BOOK_ADDED:
      return [
        ...state,
        {
          // eslint-disable-next-line no-plusplus
          id: ++lastId,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case actions.BOOK_REMOVED:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}
// action creators

export const bookAdded = (title, author) => ({
  type: actions.BOOK_ADDED,
  payload: {
    title,
    author,
  },
});

export const bookRemoved = (id) => ({
  type: actions.BOOK_REMOVED,
  payload: {
    id,
  },
});
