declare namespace NodeJS {
    interface Module {
        hot?: {
            accept(paths?: string[], callback?: () => void): void;
            accept(path?: string, callback?: () => void): void;
            accept(errHandler?: (err: any) => void): void;
            decline(paths?: string[]): void;
            decline(path?: string): void;
            decline(): void;
            dispose(callback: (data: any) => void): void;
            addDisposeHandler(callback: (data: any) => void): void;
            removeDisposeHandler(callback: (data: any) => void): void;
        };
    }
}
