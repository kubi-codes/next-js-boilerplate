import { store } from "./index";
import { Provider } from "react-redux";

export default function Wrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
