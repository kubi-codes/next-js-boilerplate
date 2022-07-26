import { combineReducers } from "redux";
import sampleReducer from "./sample-reducer";

const rootReducer = combineReducers({
  // list of reducers
  sampleReducer,
});

export default rootReducer;
