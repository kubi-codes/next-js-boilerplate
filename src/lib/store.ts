import { configureStore, combineReducers } from "@reduxjs/toolkit";
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

import CounterSlice from "./features/CounterSlice";

const persist_key = process.env.NEXT_PUBLIC_PERSIST_KEY ?? "";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistConfig: any = {
  key: "persist",
  storage,
  transforms: [
    encryptTransform({
      secretKey: persist_key,
    }),
  ],
};

// Register all reducer in HERE
const rootReducer = combineReducers({
  counter: CounterSlice,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  });
  

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          // serializableCheck: false,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    store.__persistor = persistStore(store);
    return store;
  }
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
