import { createSlice } from '@reduxjs/toolkit';
// import CHECK_STATUS from './actionTypes';

// const categoriesReducer = (state = '', action) => {
//   switch (action.type) {
//     case CHECK_STATUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const checkStatus = () => ({
//   type: CHECK_STATUS,
//   payload: 'Under Construction',
// });
const initialState = {
  status: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => ({
      status: 'Under Construction!!!',
    }
    ),

  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
