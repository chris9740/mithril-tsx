declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}
