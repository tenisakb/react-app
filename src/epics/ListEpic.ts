import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Epic } from "redux-observable";

import { RootState } from "../reducers";

import { Action, listSetAction } from "../actions";

import { LIST_GET } from "../constants";

import { getList } from "../services/Api";

const listGetEpic: Epic<Action, RootState> = (action$, state) =>
  action$
    .ofType(LIST_GET)
    .mergeMap((action: any) =>
      getList().map(payload => listSetAction(payload))
    );

export default [listGetEpic];
