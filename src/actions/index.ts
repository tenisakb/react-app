import { createAction } from "typesafe-actions";

import { LIST_GET, LIST_SET } from "../constants";

export interface Action {
  type: string;
  payload?: {};
  params?: {};
}

export interface ListAction {
  type: string;
  payload?: [];
  params?: {};
}

export interface ListAction extends Action {
  list: [];
}

export const listGetAction = createAction(LIST_GET, () => ({
  type: LIST_GET
}));

export const listSetAction = createAction(LIST_SET, (payload = []) => ({
  type: LIST_SET,
  list: payload
}));
