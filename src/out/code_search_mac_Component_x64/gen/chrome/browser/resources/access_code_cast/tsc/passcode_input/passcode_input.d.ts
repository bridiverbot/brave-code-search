import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface PasscodeInputElement {
    $: {
        inputElement: HTMLInputElement;
        container: HTMLElement;
    };
}
export declare class PasscodeInputElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        charDisplayBoxes: {
            type: ArrayConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
        focused: {
            type: BooleanConstructor;
        };
        length: {
            type: NumberConstructor;
        };
        startIndex: {
            type: NumberConstructor;
        };
        endIndex: {
            type: NumberConstructor;
        };
        value: {
            type: StringConstructor;
            notify: boolean;
            reflect: boolean;
        };
    };
    protected accessor charDisplayBoxes: string[];
    accessor disabled: boolean;
    accessor length: number;
    accessor value: string;
    accessor focused: boolean;
    private accessor startIndex;
    private accessor endIndex;
    private static readonly PASSCODE_INPUT_SIZE;
    private static readonly PASSCODE_BOX_SPACING;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    getDisplayChar(charIndex: number): HTMLElement;
    focusInput(): Promise<void>;
    protected getDisabledClass(): string;
    protected getCharBoxClass(index: number): string;
    private makeActive;
    private renderSelection;
    private placeCursor;
    private removeCursor;
    protected onSelectionClick(): void;
    protected onSelectionKeyup(): void;
    protected onSelectionSelect(): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected onInput(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'c2c-passcode-input': PasscodeInputElement;
    }
}
