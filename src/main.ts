import m from "mithril";
import { App } from "./App";

import "./assets/styles.css";

const mountPoint = document.getElementById("root");

m.route(mountPoint, "/", {
    "/": {
        view() {
            return m(App);
        },
    },
});

if (module.hot) {
    module.hot.accept("./App", () => {
        m.route.set(m.route.get());
    });
}
