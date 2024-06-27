import m, { ClassComponent, Component } from "mithril";

export class Link implements ClassComponent {
    view(vnode: m.Vnode<{ href: string; label: string; }, this>): void | m.Children {
        return (
            <a href={vnode.attrs.href} target="_blank">
                {vnode.attrs.label}
                {m(NewTabIcon)}
            </a>
        );
    }
}

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
