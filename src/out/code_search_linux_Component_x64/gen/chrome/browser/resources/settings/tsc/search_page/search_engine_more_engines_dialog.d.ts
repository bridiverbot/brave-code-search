/**
 * @fileoverview
 *
 * 'settings-search-engine-more-engines-dialog' is shown by
 * 'settings-search-page' in place of 'settings-search-engine-list-dialog', to
 * let the user search additional search engines and choose one as default.
 *
 * It closes when canceled (Cancel or Esc), or when an engine is chosen, in
 * which case it makes the engine default and fires a 'search-engine-changed'
 * event first.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrSearchFieldElement } from 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsSearchEngineMoreEnginesDialogElement {
    $: {
        dialog: CrDialogElement;
        dialogBody: HTMLElement;
        searchField: CrSearchFieldElement;
    };
}
declare const SettingsSearchEngineMoreEnginesDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSearchEngineMoreEnginesDialogElement extends SettingsSearchEngineMoreEnginesDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * State of the checkbox to save the search engine choice in guest mode,
         * or null if the checkbox is not displayed. Initialized by the parent,
         * then updated by the checkbox, firing 'save-guest-choice-changed'.
         */
        saveGuestChoice: {
            type: BooleanConstructor;
            notify: boolean;
        };
        /** The engines to search, or null until they are retrieved. */
        engines_: {
            type: ArrayConstructor;
        };
        /** The search query. */
        query_: {
            type: StringConstructor;
        };
        /**
         * ID of the selected engine, or '' if none. Always one of
         * `filteredEngines_`, so that the user can't commit an engine they
         * can't see.
         */
        selectedId_: {
            type: StringConstructor;
        };
        /** `engines_` matching `query_`. */
        filteredEngines_: {
            type: ArrayConstructor;
        };
    };
    accessor saveGuestChoice: boolean | null;
    private accessor engines_;
    private accessor query_;
    protected accessor selectedId_: string;
    protected accessor filteredEngines_: SearchEngine[];
    private browserProxy_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    private computeFilteredEngines_;
    private fetchMoreEngines_;
    protected showNoSearchResults_(): boolean;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onRadioGroupSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSaveGuestChoiceCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onCancelClick_(): void;
    protected onSetAsDefaultClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engine-more-engines-dialog': SettingsSearchEngineMoreEnginesDialogElement;
    }
}
export {};
