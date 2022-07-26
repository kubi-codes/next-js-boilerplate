import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session";
import sampleReducer from "./sample-reducer/index";

const persistConfig = {
  key: "root",
  storage: session,
};

const rootReducer = combineReducers({
  sampleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
