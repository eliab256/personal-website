import { type ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "@rainbow-me/rainbowkit/styles.css";

const Providers = (props: { children: ReactNode }) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
