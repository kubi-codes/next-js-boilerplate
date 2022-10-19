import thunk from "redux-thunk";
import persistors from "./persistor";
import rootReducer from "./reducers";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

// combine reducers with persistors
const persistedReducer = persistReducer(persistors, rootReducer);

// export multiple
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
