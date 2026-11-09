import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SidePanelGhostLoaderElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    private accessor darkMode;
}
declare global {
    interface HTMLElementTagNameMap {
        'side-panel-ghost-loader': SidePanelGhostLoaderElement;
    }
}
