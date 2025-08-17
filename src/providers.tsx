import { type ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const Providers = (props: { children: ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
