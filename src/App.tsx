import m, { Children, ClassComponent, Component } from "mithril";
import classes from "./App.css";
import { themeModel } from "./api/models/theme";

const NewTabIcon: Component = {
    view() {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                        stroke="#dcdaec"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>{" "}
                </g>
            </svg>
        );
    },
};

export class App implements ClassComponent {
    view(): void | Children {
        return (
            <div
                className={classes.container + " " + classes[themeModel.theme]}
            >
                <header className={classes.header}>
                    <h1>Mithril TSX Template </h1>
                    <span
                        role="button"
                        onclick={function () {
                            themeModel.toggle();
                        }}
                    >
                        {themeModel.theme === "dark" ? "☀️" : "🌙"}
                    </span>
                </header>
                <main className={classes.main}>
                    <section className={classes.centered}>
                        <h2>Get Started With Mithril + Typescript + JSX</h2>
                    </section>
                    <section className={classes.centered}>
                        <p>
                            This is a simple mithril.js template for Typescript
                            projects.
                        </p>

                        <p>
                            To get started, make changes to{" "}
                            <code>src/App.tsx</code>.
                        </p>
                    </section>

                    <div className={classes.divider} />

                    <section className={classes.centered}>
                        <ul>
                            <li>
                                <a
                                    href="https://vimeo.com/showcase/5584199"
                                    target="_blank"
                                >
                                    Learn Mithril
                                    {m(NewTabIcon)}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://mithril.zulipchat.com/"
                                    target="_blank"
                                >
                                    Chat
                                    {m(NewTabIcon)}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://mithril.js.org/index.html"
                                    target="_blank"
                                >
                                    Documentation
                                    {m(NewTabIcon)}
                                </a>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        );
    }
}
