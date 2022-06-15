import * as actions from './actionTypes';

// reducer
const initialData = [];
export default function booksReducer(state = initialData, action) {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.payload,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
// action creators

export const bookAdded = (book) => ({
  type: actions.ADD_BOOK,
  payload: {
    book,
  },
});

export const bookRemoved = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: id,
});
