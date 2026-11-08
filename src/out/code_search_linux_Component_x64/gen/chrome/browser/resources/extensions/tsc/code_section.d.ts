import '/strings.m.js';
import './shared_vars.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExtensionsCodeSectionElement {
    $: {
        scrollContainer: HTMLElement;
    };
}
declare const ExtensionsCodeSectionElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        code: {
            type: ObjectConstructor;
        };
        isActive: {
            type: BooleanConstructor;
        };
        /** Highlighted code. */
        highlighted_: {
            type: StringConstructor;
        };
        /** Code before the highlighted section. */
        before_: {
            type: StringConstructor;
        };
        /** Code after the highlighted section. */
        after_: {
            type: StringConstructor;
        };
        /** Description for the highlighted section. */
        highlightDescription_: {
            type: StringConstructor;
        };
        lineNumbers_: {
            type: StringConstructor;
        };
        truncatedBefore_: {
            type: NumberConstructor;
        };
        truncatedAfter_: {
            type: NumberConstructor;
        };
        /**
         * The string to display if no |code| is set (e.g. because we couldn't
         * load the relevant source file).
         */
        couldNotDisplayCode: {
            type: StringConstructor;
        };
    };
    accessor code: chrome.developerPrivate.RequestFileSourceResponse | null;
    accessor isActive: boolean | undefined;
    accessor couldNotDisplayCode: string;
    protected accessor highlighted_: string;
    protected accessor before_: string;
    protected accessor after_: string;
    protected accessor highlightDescription_: string;
    protected accessor lineNumbers_: string;
    protected accessor truncatedBefore_: number;
    protected accessor truncatedAfter_: number;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onCodeChanged_;
    protected getLinesNotShownLabel_(lineCount: number): string;
    private setLineNumbers_;
    private scrollToHighlight_;
    private getAccessibilityHighlightDescription_;
    protected shouldShowNoCode_(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-code-section': ExtensionsCodeSectionElement;
    }
}
export {};
