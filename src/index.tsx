import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/config/init-qiankun";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export async function bootstrap() {
  console.log("sub_app2 bootstrapped");
}

// mount
export async function mount(props: { container?: HTMLElement }) {
  const { container } = props;
  ReactDOM.render(
    <App />,

    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// unmount

export async function unmount(props: { container?: HTMLElement }) {
  const { container } = props;
  const root =
    container?.querySelector("#root") || document.getElementById("root");

  if (root) {
    ReactDOM.unmountComponentAtNode(root);
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
