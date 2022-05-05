import { SELECT_ITEM } from '../actions/types';

const initialState = null;

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return action.itemId;
    default:
      return previousState;
  }
};

export default reducer;
