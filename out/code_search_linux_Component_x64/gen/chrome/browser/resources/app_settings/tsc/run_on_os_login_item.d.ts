import './app_management_shared_style.css.js';
import './toggle_row.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class RunOnOsLoginItemElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        loginModeLabel: {
            type: StringConstructor;
        };
    };
    accessor loginModeLabel: string;
    accessor app: App;
    firstUpdated(): void;
    protected isManaged_(): boolean;
    protected getValue_(): boolean;
    private onClick_;
    private toggleOsLoginMode_;
    private getRunOnOsLoginMode;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-run-on-os-login-item': RunOnOsLoginItemElement;
    }
}
