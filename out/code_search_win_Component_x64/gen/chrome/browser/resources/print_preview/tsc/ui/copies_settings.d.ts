import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './number_settings_section.js';
import type { CrCheckboxElement } from 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CopiesCapability } from '../data/cdd.js';
/**
 * Maximum number of copies supported by the printer if not explicitly
 * specified.
 */
export declare const DEFAULT_MAX_COPIES: number;
export interface PrintPreviewCopiesSettingsElement {
    $: {
        collate: CrCheckboxElement;
    };
}
declare const PrintPreviewCopiesSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewCopiesSettingsElement extends PrintPreviewCopiesSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        capability: {
            type: ObjectConstructor;
        };
        copiesMax_: {
            type: NumberConstructor;
        };
        currentValue_: {
            type: StringConstructor;
        };
        inputValid_: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        collateAvailable_: {
            type: BooleanConstructor;
        };
    };
    accessor capability: CopiesCapability | null;
    accessor disabled: boolean;
    protected accessor copiesMax_: number;
    protected accessor currentValue_: string;
    protected accessor inputValid_: boolean;
    private accessor collateAvailable_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @return The maximum number of copies this printer supports.
     */
    private computeCopiesMax_;
    /**
     * @return The message to show as hint.
     */
    protected getHintMessage_(): string;
    /**
     * Updates the input string when the setting has been initialized.
     */
    private onSettingsChanged_;
    /**
     * Updates model.copies and model.copiesInvalid based on the validity
     * and current value of the copies input.
     */
    private onInputChanged_;
    /**
     * @return Whether collate checkbox should be hidden.
     */
    protected collateHidden_(): boolean;
    protected onCollateChange_(): void;
    protected onCurrentValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onInputValidChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
export type CopiesSettingsElement = PrintPreviewCopiesSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-copies-settings': PrintPreviewCopiesSettingsElement;
    }
}
export {};
