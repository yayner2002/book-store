import * as actions from './actionTypes';

const defaultState = [];
// actions creators
export const checkStatus = () => ({
  type: actions.CHECK_STATUS,
  payload: {
    description: 'Under construction',
  },
});

// reducer
export default function categoriersReducer(state = defaultState, action) {
  switch (actions.type) {
    case actions.CHECK_STATUS:
      return action.payload.description;
    default:
      return state;
  }
}
