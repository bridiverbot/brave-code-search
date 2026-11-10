export interface Iconset {
    readonly name: string;
    readonly size: number;
    applyIcon(element: HTMLElement, iconName: string): SVGElement | null;
    createIcon(iconName: string): SVGElement | null;
    removeIcon(element: HTMLElement): void;
}
export declare class IconsetMap extends EventTarget {
    private iconsets_;
    static getInstance(): IconsetMap;
    static resetInstanceForTesting(instance: IconsetMap): void;
    get(id: string): Iconset | null;
    set(id: string, iconset: Iconset): void;
}
