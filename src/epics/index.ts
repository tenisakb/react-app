import { combineEpics } from "redux-observable";

import listEpic from "./ListEpic";

const epics = combineEpics(...listEpic);

export default epics;
