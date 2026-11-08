import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './code_section.js';
import '/strings.m.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExtensionsCodeSectionElement } from './code_section.js';
export interface LoadErrorDelegate {
    /**
     * Attempts to load the previously-attempted unpacked extension.
     */
    retryLoadUnpacked(retryGuid?: string): Promise<boolean>;
}
export interface LoadErrorElement {
    $: {
        code: ExtensionsCodeSectionElement;
        dialog: CrDialogElement;
    };
}
export declare class LoadErrorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        loadError: {
            type: ObjectConstructor;
        };
        file_: {
            type: StringConstructor;
        };
        error_: {
            type: StringConstructor;
        };
        retrying_: {
            type: BooleanConstructor;
        };
        isCodeSectionActive_: {
            type: BooleanConstructor;
        };
        codeSectionProperties_: {
            type: ObjectConstructor;
        };
    };
    static get observers(): string[];
    accessor delegate: LoadErrorDelegate | undefined;
    accessor loadError: Error | chrome.developerPrivate.LoadError | undefined;
    protected accessor codeSectionProperties_: chrome.developerPrivate.RequestFileSourceResponse | null;
    protected accessor file_: string | undefined;
    protected accessor error_: string | null;
    protected accessor isCodeSectionActive_: boolean | undefined;
    protected accessor retrying_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    show(): void;
    protected onCloseClick_(): void;
    close(): void;
    protected onRetryClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-load-error': LoadErrorElement;
    }
}
