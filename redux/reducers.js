import { combineReducers } from "redux";

import sampleReducer from "./sample-reducer/index";

// you can add your reducer in here
const rootReducer = combineReducers({
  sampleReducer,
});

export default rootReducer;
