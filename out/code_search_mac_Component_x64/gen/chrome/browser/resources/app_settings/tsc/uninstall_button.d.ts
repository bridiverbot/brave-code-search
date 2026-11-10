import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import '//resources/cr_elements/icons.html.js';
import type { App } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class UninstallButtonElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        app: {
            type: ObjectConstructor;
        };
        uninstallLabel: {
            type: StringConstructor;
        };
        policyLabel: {
            type: StringConstructor;
        };
    };
    accessor app: App;
    accessor uninstallLabel: string;
    accessor policyLabel: string;
    /**
     * Returns true if the button should be disabled due to app install type.
     *
     * If the compiler complains about the "Argument ... is not assignable to
     * parameter of type 'never', you need to add a new 'case' below.
     */
    protected getDisableState_(): boolean;
    /**
     * Returns true if the app was installed by a policy.
     */
    protected showPolicyIndicator_(): boolean;
    /**
     * Returns true if the uninstall button should be shown.
     */
    protected showUninstallButton_(): boolean;
    protected onClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-uninstall-button': UninstallButtonElement;
    }
}
