/**
 * @fileoverview
 * `settings-checkbox` is a checkbox that controls a supplied preference.
 */
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsCheckboxElement {
    $: {
        checkbox: CrCheckboxElement;
        subLabel: HTMLElement;
    };
}
declare const SettingsCheckboxElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_boolean_control_mixin.js").SettingsBooleanControlMixinInterface);
export declare class SettingsCheckboxElement extends SettingsCheckboxElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Alternative source for the sub-label that can contain html markup.
         * Only use with trusted input.
         */
        subLabelHtml: {
            type: StringConstructor;
        };
    };
    accessor subLabelHtml: string;
    updated(changedProperties: PropertyValues<this>): void;
    /** Focus on the inner cr-checkbox. */
    focus(): void;
    protected onChange_(e: CustomEvent<boolean>): void;
    protected hasSubLabel_(): boolean;
    protected sanitizeInnerHtml_(): TrustedHTML;
    protected onSubLabelClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-checkbox': SettingsCheckboxElement;
    }
}
export {};
