import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './settings_section.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Settings } from '../data/model.js';
interface CheckboxOption {
    name: keyof Settings;
    label: string;
    value?: boolean;
    managed?: boolean;
    available?: boolean;
}
declare const PrintPreviewOtherOptionsSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewOtherOptionsSettingsElement extends PrintPreviewOtherOptionsSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        options_: {
            type: ArrayConstructor;
        };
        /**
         * The index of the checkbox that should display the "Options" title.
         */
        firstIndex_: {
            type: NumberConstructor;
        };
    };
    accessor disabled: boolean;
    protected accessor options_: CheckboxOption[];
    private accessor firstIndex_;
    private timeouts_;
    private previousValues_;
    connectedCallback(): void;
    /**
     * @param settingName The name of the setting to updated.
     * @param newValue The new value for the setting.
     */
    private updateSettingWithTimeout_;
    /**
     * @param index The index of the option to update.
     */
    private updateOptionFromSetting_;
    /**
     * @param managed Whether the setting is managed by policy.
     * @return Whether the checkbox should be disabled.
     */
    protected getDisabled_(managed: boolean | undefined): boolean;
    private onHeaderFooterSettingChange_;
    private onCssBackgroundSettingChange_;
    private onRasterizeSettingChange_;
    private onSelectionOnlySettingChange_;
    /**
     * @param e Contains the checkbox item that was checked.
     */
    protected onChange_(e: Event): void;
    /**
     * @param index The index of the settings section.
     * @return Class string containing 'first-visible' if the settings
     *     section is the first visible.
     */
    protected getClass_(index: number): string;
}
export type OtherOptionsSettingsElement = PrintPreviewOtherOptionsSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-other-options-settings': PrintPreviewOtherOptionsSettingsElement;
    }
}
export {};
