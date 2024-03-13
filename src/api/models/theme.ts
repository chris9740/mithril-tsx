type Theme = "dark" | "light";

function getTheme() {
    const defaultTheme: Theme = "dark";
    const storedValue = localStorage.getItem("theme");
    const theme: Theme =
        storedValue === "dark" || storedValue === "light"
            ? storedValue
            : defaultTheme;

    return theme;
}

export const themeModel = new class ThemeModel {
    #theme: Theme;

    get theme(): Theme {
        if (this.#theme) {
            return this.#theme;
        }

        const theme = getTheme();

        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        this.#theme = theme;

        return this.#theme;
    }

    set theme(newTheme: Theme) {
        localStorage.setItem("theme", newTheme);
        document.body.setAttribute("data-theme", newTheme);
        this.#theme = newTheme;
    }

    toggle() {
        const previousTheme = this.theme;
        const newTheme: Theme = previousTheme === "dark" ? "light" : "dark";

        this.theme = newTheme;
    }
}
