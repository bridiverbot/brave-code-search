import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class MorePermissionsItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        morePermissionsLabel: {
            type: StringConstructor;
        };
    };
    accessor app: App;
    accessor morePermissionsLabel: string;
    firstUpdated(): void;
    private onClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-more-permissions-item': MorePermissionsItemElement;
    }
}
