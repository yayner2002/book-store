import * as actions from './actionTypes';

const initBooks = [
  {
    id: 1,
    title: 'Introduction to React',
    author: 'Jordan Walke',
  },
  {
    id: 2,
    title: 'React for Beginners',
    author: 'Maximilian Schwarzmuller',
  },
];

// const initID = 0;
const bookReducer = (state = initBooks, action) => {
  switch (action.type) {
    case actions.ADD_BOOK:
      return [
        ...initBooks,
        {
          id: 2,
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
    id: 2,
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
