import * as actions from './actionTypes';

const lastId = 0;
// reducer
export default function booksReducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: lastId + 1,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
// action creators

export const bookAdded = (title, author) => ({
  type: actions.ADD_BOOK,
  payload: {
    title,
    author,
  },
});

export const bookRemoved = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: id,
});
