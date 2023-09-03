import { store, persistor } from "./index";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="primary" />
    </div>
  );
}


function App({ children }) {
  return (
    <Provider store={store} serverState={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default App;
