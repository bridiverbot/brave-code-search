import './app_content_dialog.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class AppContentItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        showAppContentDialog: {
            type: BooleanConstructor;
        };
        hidden: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor app: App;
    appContentLabel: string;
    appContentSublabel: string;
    accessor showAppContentDialog: boolean;
    accessor hidden: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    protected onAppContentClick_(): void;
    protected onAppContentDialogClose_(): void;
    private isAppContentHidden_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-app-content-item': AppContentItemElement;
    }
}
