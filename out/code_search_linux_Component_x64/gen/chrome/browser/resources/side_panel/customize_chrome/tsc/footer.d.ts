import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface FooterElement {
    $: {
        showToggle: CrToggleElement;
    };
}
export declare class FooterElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** Whether the footer is shown. */
        checked_: {
            type: BooleanConstructor;
        };
        /**
           Whether the footer is managed by enterprise custom label or logo
           policy.
         */
        managedByPolicy_: {
            type: BooleanConstructor;
        };
    };
    protected accessor managedByPolicy_: boolean;
    protected accessor checked_: boolean;
    protected canShowManagement_: boolean;
    private apiProxy_;
    private setFooterSettingsListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setChecked_;
    protected onShowToggleChange_(e: CustomEvent<boolean>): void;
    protected onShowToggleClick_(): void;
    private setFooterVisible_;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-footer': FooterElement;
    }
}
