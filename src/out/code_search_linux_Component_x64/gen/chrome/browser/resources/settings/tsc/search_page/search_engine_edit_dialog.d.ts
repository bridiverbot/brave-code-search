/**
 * @fileoverview 'settings-search-engine-edit-dialog' is a component for adding
 * or editing a search engine entry.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsSearchEngineEditDialogElement {
    $: {
        actionButton: CrButtonElement;
        cancel: CrButtonElement;
        dialog: CrDialogElement;
        keyword: CrInputElement;
        queryUrl: CrInputElement;
        searchEngine: CrInputElement;
    };
}
declare const SettingsSearchEngineEditDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSearchEngineEditDialogElement extends SettingsSearchEngineEditDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The search engine to be edited. If not populated a new search engine
         * should be added.
         */
        model: {
            type: ObjectConstructor;
        };
        searchEngine_: {
            type: StringConstructor;
        };
        keyword_: {
            type: StringConstructor;
        };
        queryUrl_: {
            type: StringConstructor;
        };
        dialogTitle_: {
            type: StringConstructor;
        };
        actionButtonText_: {
            type: StringConstructor;
        };
        showPolicySubtitle_: {
            type: BooleanConstructor;
        };
        readonly_: {
            type: BooleanConstructor;
        };
        urlIsReadonly_: {
            type: BooleanConstructor;
        };
    };
    accessor model: SearchEngine | null;
    protected accessor searchEngine_: string;
    protected accessor keyword_: string;
    protected accessor queryUrl_: string;
    protected accessor dialogTitle_: string;
    protected accessor actionButtonText_: string;
    protected accessor showPolicySubtitle_: boolean;
    protected accessor readonly_: boolean;
    protected accessor urlIsReadonly_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onSearchEngineValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSearchEngineInput_(e: Event): void;
    protected onKeywordValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onKeywordFocus_(e: Event): void;
    protected onKeywordInput_(e: Event): void;
    protected onQueryUrlValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onQueryUrlFocus_(e: Event): void;
    protected onQueryUrlInput_(e: Event): void;
    protected onCancelClick_(): void;
    private updateEnginesFromCategorizedUrls_;
    private updateEnginesFromSearchEnginesInfo_;
    protected cancel_(): void;
    protected onActionButtonClick_(): void;
    private validateElement_;
    private validate_;
    private updateActionButtonState_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engine-edit-dialog': SettingsSearchEngineEditDialogElement;
    }
}
export {};
