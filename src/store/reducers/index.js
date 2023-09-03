import { combineReducers } from "redux";

// import all reducer
import authReducer from "./auth.reducers";

// combine all reducer
const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
