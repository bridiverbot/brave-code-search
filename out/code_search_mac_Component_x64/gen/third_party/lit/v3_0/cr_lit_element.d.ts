import { LitElement, PropertyValues } from 'lit/index.js';
export declare class CrLitElement extends LitElement {
    readonly shadowRoot: ShadowRoot;
    private willUpdatePending_;
    private static notifyProps_;
    constructor();
    ensureInitialRender(): void;
    connectedCallback(): void;
    willUpdate(_changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focus(options?: {
        preventScroll?: boolean;
        focusVisible?: boolean;
    }): void;
    fire<T = any>(eventName: string, detail?: T): void;
    private static patchPropertiesObject;
    private static populateNotifyProps;
    protected static finalize(): void;
}
