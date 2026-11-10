import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import '/strings.m.js';
import './button_label.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ModuleSettings } from './customize_chrome.mojom-webui.js';
export interface CardsElement {
    $: {
        showToggleContainer: HTMLElement;
    };
}
export declare class CardsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** The list of modules that can be enabled or disabled on the NTP. */
        modules_: {
            type: ArrayConstructor;
        };
        /** Whether the modules are customizable or not. */
        show_: {
            type: BooleanConstructor;
        };
        /** Whether the modules are managed by admin policies or not. */
        managedByPolicy_: {
            type: BooleanConstructor;
        };
        initialized_: {
            type: BooleanConstructor;
        };
    };
    protected accessor modules_: ModuleSettings[];
    protected accessor show_: boolean;
    protected accessor managedByPolicy_: boolean;
    private apiProxy_;
    private setModulesSettingsListenerId_;
    protected accessor initialized_: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setShow_;
    protected onShowChange_(e: CustomEvent<boolean>): void;
    protected onShowToggleClick_(): void;
    private setModuleStatus;
    protected onCardCheckboxChange_(e: CustomEvent<boolean>): void;
    protected onCardClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'customize-chrome-cards': CardsElement;
    }
}
