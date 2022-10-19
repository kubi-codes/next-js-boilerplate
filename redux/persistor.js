import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";

let storage;
let storageType = process.env.NEXT_PUBLIC_PERSIST_STORAGE;
let storageKey = process.env.NEXT_PUBLIC_PERSIST_KEY;

if (storageType === "session") {
  storage = sessionStorage;
} else {
  storage = localStorage;
}

const persistConfig = {
  key: storageKey,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
        console.log("persist handling error");
      },
    }),
  ],
  whitelist: ["sampleReducer"], // you can add whitelist persistent reducer in here using array
};

export default persistConfig;
