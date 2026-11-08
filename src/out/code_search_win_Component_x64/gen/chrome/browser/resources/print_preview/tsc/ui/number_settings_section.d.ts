import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './settings_section.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PrintPreviewNumberSettingsSectionElement {
    $: {
        userValue: CrInputElement;
    };
}
declare const PrintPreviewNumberSettingsSectionElementBase: typeof CrLitElement & (new (...args: any[]) => import("./input_mixin.js").InputMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class PrintPreviewNumberSettingsSectionElement extends PrintPreviewNumberSettingsSectionElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        inputValid: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        currentValue: {
            type: StringConstructor;
            notify: boolean;
        };
        defaultValue: {
            type: StringConstructor;
        };
        maxValue: {
            type: NumberConstructor;
        };
        minValue: {
            type: NumberConstructor;
        };
        inputLabel: {
            type: StringConstructor;
        };
        inputAriaLabel: {
            type: StringConstructor;
        };
        hintMessage: {
            type: StringConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        errorMessage_: {
            type: StringConstructor;
        };
    };
    accessor currentValue: string;
    accessor defaultValue: string;
    accessor disabled: boolean;
    accessor hintMessage: string;
    accessor inputAriaLabel: string;
    accessor inputLabel: string;
    accessor inputValid: boolean;
    accessor minValue: number | undefined;
    accessor maxValue: number | undefined;
    protected accessor errorMessage_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @return The cr-input field element for InputBehavior. */
    getInput(): CrInputElement;
    /**
     * @param e Contains the new input value.
     */
    private onInputChangeEvent_;
    /**
     * @return Whether the input should be disabled.
     */
    protected getDisabled_(): boolean;
    protected onKeydown_(e: KeyboardEvent): void;
    protected onBlur_(): void;
    private onCurrentValueChanged_;
}
export type NumberSettingsSectionElement = PrintPreviewNumberSettingsSectionElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-number-settings-section': PrintPreviewNumberSettingsSectionElement;
    }
}
export {};
