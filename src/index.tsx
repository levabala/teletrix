import { render } from "solid-js/web";

import "./index.scss";
import App from "./App";

const root = document.getElementById("root");

if (!root) throw new Error("no root dom element");

render(() => <App />, root);
