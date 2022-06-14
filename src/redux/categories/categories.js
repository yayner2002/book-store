import CHECK_STATUS from './actionTypes';

// actions creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: {
    description: 'Under construction',
  },
});

// reducer
export default function categoriersReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload.description;
    default:
      return state;
  }
}
