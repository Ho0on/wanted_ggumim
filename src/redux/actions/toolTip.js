import { SELECT_ITEM } from './types';

export const selectItem = itemId => {
  return { type: SELECT_ITEM, itemId };
};
