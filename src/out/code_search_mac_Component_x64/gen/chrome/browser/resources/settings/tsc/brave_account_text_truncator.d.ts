export declare class TextTruncator {
    private readonly onTruncated;
    private context?;
    private observedElement?;
    private resizeObserver?;
    private text;
    constructor(onTruncated: (text: string) => void);
    observe(element: HTMLElement, text: string): void;
    disconnect(): void;
    private truncate;
}
