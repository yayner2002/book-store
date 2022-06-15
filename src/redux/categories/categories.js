import CHECK_STATUS from './actionTypes';
import initialData from './initialData';

// actions creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// reducer
export default function categoriersReducer(state = initialData, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return state;
    default:
      return state;
  }
}
