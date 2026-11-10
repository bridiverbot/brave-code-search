/**
 * @fileoverview 'cr-textarea' is a component similar to native textarea,
 * and inherits styling from cr-input.
 */
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface CrTextareaElement {
    $: {
        firstFooter: HTMLElement;
        footerContainer: HTMLElement;
        input: HTMLTextAreaElement;
        label: HTMLElement;
        secondFooter: HTMLElement;
        underline: HTMLElement;
    };
}
export declare class CrTextareaElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Whether the text area should automatically get focus when the page
         * loads.
         */
        autofocus: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * Whether the text area is disabled. When disabled, the text area loses
         * focus and is not reachable by tabbing.
         */
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Whether the text area is required. */
        required: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Maximum length (in characters) of the text area. */
        maxlength: {
            type: NumberConstructor;
        };
        /**
         * Whether the text area is read only. If read-only, content cannot be
         * changed.
         */
        readonly: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Number of rows (lines) of the text area. */
        rows: {
            type: NumberConstructor;
            reflect: boolean;
        };
        /** Caption of the text area. */
        label: {
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
        /**
         * Placeholder text that is shown when no value is present.
         */
        placeholder: {
            type: StringConstructor;
        };
        /** Whether the textarea can auto-grow vertically or not. */
        autogrow: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /** Whether the textarea is invalid or not. */
        invalid: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * First footer text below the text area. Can be used to warn user about
         * character limits.
         */
        firstFooter: {
            type: StringConstructor;
        };
        /**
         * Second footer text below the text area. Can be used to show current
         * character count.
         */
        secondFooter: {
            type: StringConstructor;
        };
    };
    accessor autofocus: boolean;
    accessor disabled: boolean;
    accessor readonly: boolean;
    accessor required: boolean;
    accessor rows: number;
    accessor label: string;
    accessor maxlength: number | undefined;
    accessor value: string;
    accessor placeholder: string;
    accessor autogrow: boolean;
    accessor invalid: boolean;
    accessor firstFooter: string;
    accessor secondFooter: string;
    protected accessor internalValue_: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    focusInput(): void;
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    protected onInputChange_(e: Event): Promise<void>;
    protected onInput_(e: Event): void;
    protected onFocus_(): void;
    protected onBlur_(): void;
    private onInputFocusChange_;
    protected getFooterAria_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-textarea': CrTextareaElement;
    }
}
