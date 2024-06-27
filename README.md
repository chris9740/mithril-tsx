# Mithril.js Template with TypeScript and JSX

This project is a template for building single-page applications using Mithril.js with TypeScript and JSX support. It includes a pre-configured environment for developing Mithril.js applications, allowing you to easily leverage the full power of TypeScript and JSX for more expressive and type-safe code.

## Features

- **Mithril.js**: A modern, lightweight framework for building single-page applications with minimal boilerplate.
- **TypeScript**: Adds type safety to the development process, improving the quality and maintainability of the code.
- **JSX**: Allows for writing HTML elements in JavaScript with a syntax similar to HTML, enhancing the developer experience.
- **Theme Functionality**: Demonstrates how state works in Mithril.js through a simple dark and light theme toggler. This feature showcases state management and component interaction within the Mithril.js ecosystem.

## Getting Started

To get started with this template, clone the repository to your local machine and install the dependencies.

```bash
git clone https://github.com/chris9740/mithril-tsx.git
cd mithril-tsx
npm install
```

After installing the dependencies, you can start the development server:

```bash
npm start
```

This command will compile the TypeScript and JSX, and serve your application on a local web server. Visit `http://localhost:5051` to view your application.

Make sure to visit [USAGE.md](USAGE.md) before you start coding, it contains brief information about a common pitfall when rendering components.

## Routing Configuration

This template uses Mithril.js's routing capabilities. If you wish to use hash-based routing, you can set the route prefix by adding the following line before calling `m.mount(...)` in `src/main.ts`:

```javascript
m.route.prefix = "/#";
```

## Theme Switching

The project includes a basic theme switching functionality to demonstrate state management within Mithril.js. You can toggle between a dark and light theme, which is managed globally and affects the entire application's appearance. This serves as a practical example of how to handle application state and respond to user interactions in Mithril.js.

## Contributing

Contributions to this template are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it as the basis for your own Mithril.js applications.
