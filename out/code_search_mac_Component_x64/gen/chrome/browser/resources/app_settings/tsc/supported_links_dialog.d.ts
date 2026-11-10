import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class SupportedLinksDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
    };
    accessor app: App;
    firstUpdated(): void;
    private trapDialogFocus_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-supported-links-dialog': SupportedLinksDialogElement;
    }
}
