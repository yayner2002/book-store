import CHECK_STATUS from './actionTypes';

const categoriesReducer = (state = 'Under Construction', action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under Construction',
});

export default categoriesReducer;
