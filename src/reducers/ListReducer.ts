import { LIST_SET } from "../constants";

import { ListAction } from "../actions";

export interface ListState {
  list?: [];
}

const initialState = {};

export const listReducer = (
  state: ListState = initialState,
  action: ListAction
): ListState => {
  switch (action.type) {
    case LIST_SET:
      return { ...state, list: action.list };

    default:
      return state;
  }
};
