import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class ViewerSignatureSidePanelElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-signature-side-panel': ViewerSignatureSidePanelElement;
    }
}
