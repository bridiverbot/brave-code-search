import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * @fileoverview 'cr-input' is a component similar to native input.
 *
 * Native input attributes that are currently supported by cr-inputs are:
 *   autofocus
 *   disabled
 *   max (only applicable when type="number")
 *   min (only applicable when type="number")
 *   maxlength
 *   minlength
 *   pattern
 *   placeholder
 *   readonly
 *   required
 *   tabindex (set through input-tabindex)
 *   type (see |SUPPORTED_INPUT_TYPES| above)
 *   value
 *
 * Additional attributes that you can use with cr-input:
 *   label
 *   auto-validate - triggers validation based on |pattern| and |required|,
 *                   whenever |value| changes.
 *   error-message - message displayed under the input when |invalid| is true.
 *   invalid
 *
 * You may pass an element into cr-input via [slot="suffix"] to be vertically
 * center-aligned with the input field, regardless of position of the label and
 * error-message. Example:
 *   <cr-input>
 *     <cr-button slot="suffix"></cr-button>
 *   </cr-input>
 */
export interface CrInputElement {
    $: {
        error: HTMLElement;
        label: HTMLElement;
        input: HTMLInputElement;
        underline: HTMLElement;
    };
}
export declare class CrInputElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaDescription: {
            type: StringConstructor;
        };
        ariaLabel: {
            type: StringConstructor;
        };
        autofocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        autoValidate: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        errorMessage: {
            type: StringConstructor;
        };
        /**
         * This is strictly used internally for styling, do not attempt to use
         * this to set focus.
         */
        focused_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        invalid: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        max: {
            type: NumberConstructor;
            reflect: boolean;
        };
        min: {
            type: NumberConstructor;
            reflect: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            reflect: boolean;
        };
        minlength: {
            type: NumberConstructor;
            reflect: boolean;
        };
        pattern: {
            type: StringConstructor;
            reflect: boolean;
        };
        inputmode: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        placeholder: {
            type: StringConstructor;
        };
        readonly: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        required: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inputTabindex: {
            type: NumberConstructor;
        };
        type: {
            type: StringConstructor;
        };
        value: {
            type: StringConstructor;
            notify: boolean;
        };
        internalValue_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor ariaDescription: string | null;
    accessor ariaLabel: string;
    accessor autofocus: boolean;
    accessor autoValidate: boolean;
    accessor disabled: boolean;
    accessor errorMessage: string;
    accessor inputmode: string | undefined;
    accessor inputTabindex: number;
    accessor invalid: boolean;
    accessor label: string;
    accessor max: number | undefined;
    accessor min: number | undefined;
    accessor maxlength: number | undefined;
    accessor minlength: number | undefined;
    accessor pattern: string | undefined;
    accessor placeholder: string | null;
    accessor readonly: boolean;
    accessor required: boolean;
    accessor type: string;
    accessor value: string;
    protected accessor internalValue_: string;
    protected accessor focused_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    get inputElement(): HTMLInputElement;
    focus(): void;
    /**
     * Focuses the input element.
     * TODO(crbug.com/40593040): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput(): boolean;
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    protected onInputChange_(e: Event): Promise<void>;
    protected onInput_(e: Event): void;
    protected onInputFocus_(): void;
    protected onInputBlur_(): void;
    protected getAriaLabel_(): string | null;
    protected getAriaLabelledBy_(): string | null;
    protected getLabelAriaHidden_(): string | null;
    protected getAriaInvalid_(): "false" | "true";
    protected getErrorMessage_(): string;
    protected getErrorRole_(): "" | "alert";
    protected getAriaErrorMessage_(): "" | "error";
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start?: number, end?: number): void;
    validate(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-input': CrInputElement;
    }
}
