import m, { Children, ClassComponent } from "mithril";
import classes from "./Header.scss";
import { themeModel } from "../api/models/theme";

export class Header implements ClassComponent {
    view(): void | Children {
        return (
            <header className={classes.header}>
                <h1>Mithril TSX Template</h1>
                <span
                    role="button"
                    onclick={function () {
                        themeModel.toggle();
                    }}
                >
                    {themeModel.theme === "dark" ? "☀️" : "🌙"}
                </span>
            </header>
        );
    }
}
