/**
 * The CSS selector used to get the <link> node with the colors.css stylesheet.
 * The wildcard is needed since the URL ends with a timestamp.
 */
export declare const COLORS_CSS_SELECTOR: string;
export declare const COLOR_PROVIDER_CHANGED: string;
export declare class ColorChangeUpdater {
    private listenerId_;
    private root_;
    eventTarget: EventTarget;
    constructor(root: Document | ShadowRoot);
    /**
     * Starts listening for ColorProvider changes from the browser and updates the
     * `root_` whenever changes occur.
     */
    start(): void;
    onColorProviderChanged(): Promise<void>;
    /**
     * Forces `root_` to refresh its colors.css stylesheet. This is used to
     * fetch an updated stylesheet when the ColorProvider associated with the
     * WebUI has changed.
     * @return A promise which resolves to true once the new colors are loaded and
     *     installed into the DOM. In the case of an error returns false. When a
     *     new colors.css is loaded, this will always freshly query the existing
     *     colors.css, allowing multiple calls to successfully remove existing,
     *     outdated CSS.
     */
    refreshColorsCss(): Promise<boolean>;
    static forDocument(): ColorChangeUpdater;
}
