import { combineReducers } from "redux";

import { listReducer, ListState } from "./ListReducer";

export type RootState = {
  list: ListState;
};

const reducers = combineReducers({
  list: listReducer
});

export default reducers;
