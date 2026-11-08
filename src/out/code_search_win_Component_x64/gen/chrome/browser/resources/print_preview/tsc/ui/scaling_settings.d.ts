import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './number_settings_section.js';
import './settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { ScalingType } from '../data/scaling.js';
declare const PrintPreviewScalingSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewScalingSettingsElement extends PrintPreviewScalingSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        isPdf: {
            type: BooleanConstructor;
        };
        currentValue_: {
            type: StringConstructor;
        };
        customSelected_: {
            type: BooleanConstructor;
        };
        scalingTypeValue_: {
            type: NumberConstructor;
        };
        scalingTypePdfValue_: {
            type: NumberConstructor;
        };
        inputValid_: {
            type: BooleanConstructor;
        };
        dropdownDisabled_: {
            type: BooleanConstructor;
        };
        settingKey_: {
            type: StringConstructor;
        };
    };
    accessor disabled: boolean;
    accessor isPdf: boolean;
    protected accessor currentValue_: string;
    protected accessor customSelected_: boolean;
    protected accessor dropdownDisabled_: boolean;
    protected accessor inputValid_: boolean;
    private accessor settingKey_;
    private accessor scalingTypeValue_;
    private accessor scalingTypePdfValue_;
    private lastValidScaling_;
    /**
     * Whether the custom scaling setting has been set to true, but the custom
     * input has not yet been expanded. Used to determine whether changes in the
     * dropdown are due to user input or sticky settings.
     */
    private customScalingSettingSet_;
    /**
     * Whether the user has selected custom scaling in the dropdown, but the
     * custom input has not yet been expanded. Used to determine whether to
     * auto-focus the custom input.
     */
    private userSelectedCustomScaling_;
    /**
     * Whether the Finch flag `alignPdfDefaultPrintSettingsWithHTML` is on.
     */
    private alignPdfDefaultPrintSettingsWithHTML_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    onProcessSelectChange(value: string): void;
    private updateScalingToValid_;
    /**
     * Updates the input string when scaling setting is set.
     */
    private onScalingSettingChanged_;
    private onScalingTypeSettingChanged_;
    /**
     * Updates scaling settings based on the validity and current value of the
     * scaling input.
     */
    private onInputFieldChanged_;
    /**
     * @return Whether the input should be disabled.
     */
    protected inputDisabled_(): boolean;
    /**
     * @return Whether the custom scaling option is selected.
     */
    private computeCustomSelected_;
    protected onTransitionend_(): void;
    protected onCurrentValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputValidChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected isSelected_(value: ScalingType): boolean;
    /**
     * @return Whether the actual size option should be enabled.
     */
    protected computeOptionActualSizeEnabled_(): boolean;
}
export type ScalingSettingsElement = PrintPreviewScalingSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-scaling-settings': PrintPreviewScalingSettingsElement;
    }
}
export {};
