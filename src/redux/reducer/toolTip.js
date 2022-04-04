import { SELECT_ITEM } from '../actions/types';

const initialState = null;

const reducer = (previousState = initialState, action) => {
  if (action.type === SELECT_ITEM) {
    return action.itemId;
  } else {
    return previousState;
  }
};

export default reducer;
