import m, { Children, ClassComponent } from "mithril";
import { Header } from "./components/Header";
import classes from "./App.css";
import { themeModel } from "./api/models/theme";
import { Link } from "./components/Link";

export class App implements ClassComponent {
    view(): void | Children {
        const className = classes.container + " " + classes[themeModel.theme];

        const links = [
            {
                href: "https://vimeo.com/showcase/5584199",
                label: "Learn Mithril",
            },
            {
                href: "https://mithril.zulipchat.com/",
                label: "Chat",
            },
            {
                href: "https://mithril.js.org/index.html",
                label: "Documentation",
            },
        ];

        return (
            <div className={className}>
                <Header />
                <main className={classes.main}>
                    <section className={classes.centered}>
                        <h2>Get Started With Mithril + Typescript + JSX</h2>
                    </section>
                    <section className={classes.centered}>
                        <p>This is a simple mithril.js template for Typescript projects.</p>
                        <p>To get started, make changes to <code>src/App.tsx</code>.</p>
                    </section>

                    <div className={classes.divider} />

                    <ul>
                        {links.map((link) => (
                            <li>
                                <Link href={link.href} label={link.label} />
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        );
    }
}
