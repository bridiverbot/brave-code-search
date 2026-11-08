import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/policy/cr_policy_indicator.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { CrToggleElement } from '//resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ToggleRowElement {
    $: {
        toggle: CrToggleElement;
    };
}
export declare class ToggleRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        icon: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        managed: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        value: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        description: {
            type: StringConstructor;
        };
    };
    accessor icon: string;
    accessor label: string;
    accessor managed: boolean;
    accessor disabled: boolean;
    accessor value: boolean;
    accessor description: string;
    firstUpdated(): void;
    isChecked(): boolean;
    setToggle(value: boolean): void;
    protected isDisabled_(): boolean;
    private onClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-management-toggle-row': ToggleRowElement;
    }
}
