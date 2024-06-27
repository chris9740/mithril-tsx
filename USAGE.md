## Usage

### Preface

Everything besides `main.ts` and `globals.d.ts` are just for demonstration and can be removed. You would usually want to keep the `App.tsx` as well and just replace the content of the view function with your own code.

## Important to know before you start

### Rendering Class Components

When you want to render a component with this syntax: `<Example name="World" />`, you have to write it as a class:

```typescript
import m, { ClassComponent, Component } from "mithril";

export default class Example implements ClassComponent {
    view(vnode: m.Vnode<{ name: string }, this>): void | m.Children {
        return <div>Hello, {vnode.attrs.name}</div>;
    }
}

export const App: Component = {
    view() {
        return (
            <div>
                <Example name="World" />
            </div>
        );
    },
};
```

### Rendering `const` Components

If you want to use a `const` component, you have to render it like this:

```typescript
import m, { Component, Vnode } from "mithril";

export const Example = {
    view(vnode: Vnode<{ name: string }>) {
        return <div>Hello, {vnode.attrs.name}</div>;
    },
};

export const App: Component = {
    view() {
        return <div>{m(Example, { name: "World" })}</div>;
    },
};
```

Trying to render a `const` component like this: `<Example name="World" />` will result in an error.
