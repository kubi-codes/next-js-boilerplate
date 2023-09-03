import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { setupListeners } from "@reduxjs/toolkit/query";
import { whitelist, blacklist, key } from "./persistent";
import { encryptTransform } from "redux-persist-transform-encrypt";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import reducer from "./reducers";

const persistConfig = {
  key,
  storage,
  whitelist,
  blacklist,
  transforms: [
    encryptTransform({
      secretKey: process.env.NEXT_PUBLIC_PERSIST_SECRET_KEY,
      onError: function (error) {
        // Handle the error.
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const makeStore = () => store;

setupListeners(store.dispatch);

const wrapper = createWrapper(makeStore);
export const persistor = persistStore(store);

export default wrapper;
