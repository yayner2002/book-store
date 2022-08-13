import * as actions from './actionTypes';

const initID = 0;
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...state,
        {
          id: initID + 1,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};
export default bookReducer;

export const addBook = (title, author) => ({
  type: actions.ADD_BOOK,
  payload: {
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});
