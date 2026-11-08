import type { Iconset } from '//resources/cr_elements/cr_icon/iconset_map.js';
export declare class CrLazyIconset implements Iconset {
    readonly name: string;
    readonly size: number;
    private parsedIcons_;
    private lazyIcons_;
    constructor(name: string, size?: number);
    registerIcons(iconsMap: Record<string, () => (TrustedHTML | string)>): void;
    applyIcon(element: HTMLElement, iconName: string): SVGElement | null;
    createIcon(iconName: string): SVGElement | null;
    removeIcon(element: HTMLElement): void;
    private cloneIcon_;
}
