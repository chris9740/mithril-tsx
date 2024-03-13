import m from "mithril";
import { App } from "./App";
import { themeModel } from "./api/models/theme";

import "./assets/styles.css";

declare global {
    interface Window {
        m: typeof m;
    }
}

// Required for @babel/plugin-transform-react-jsx
window.m = m;

const mountPoint = document.getElementById("root");

m.route(mountPoint, "/", {
    "/": {
        view() {
            return m(App);
        },
    },
});
