/**
 * @fileoverview
 *
 * 'settings-search-engine-list-dialog' is the dialog shown for displaying the
 * list of search engines from which the user can choose a default.
 *
 * When the "More options" entry point is enabled, clicking it fires a
 * 'more-engines-click' event, letting the parent replace this dialog with
 * 'settings-search-engine-more-engines-dialog'.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import './search_engine_icon.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsSearchEngineListDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
declare const SettingsSearchEngineListDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsSearchEngineListDialogElement extends SettingsSearchEngineListDialogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * List of search engines available for the user to select as their
         * default search provider in the choice dialog (includes prepopulated
         * regional, default, managed policy, and recommended policy search
         * engines; excludes custom user-added engines).
         */
        searchEngines: {
            type: ArrayConstructor;
        };
        /**
         * The id of the search engine that is selected by the user.
         */
        selectedEngineId_: {
            type: StringConstructor;
        };
        /**
         * State of the checkbox to save the search engine choice in guest mode,
         * or null if the checkbox is not displayed. Initialized by the parent,
         * then updated by the checkbox, firing 'save-guest-choice-changed'.
         */
        saveGuestChoice: {
            type: BooleanConstructor;
            notify: boolean;
        };
        /**
         * Whether the "More options" entry point is enabled via feature flag.
         */
        pickerWithMoreEnginesEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor searchEngines: SearchEngine[];
    protected accessor selectedEngineId_: string;
    accessor saveGuestChoice: boolean | null;
    protected accessor pickerWithMoreEnginesEnabled_: boolean;
    private browserProxy_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    protected getTitle_(): string;
    protected getSubtitle_(): string;
    protected onMoreEnginesClick_(): void;
    protected onSetAsDefaultClick_(): void;
    protected onCancelClick_(): void;
    protected onDialogCancel_(): void;
    private searchEnginesChanged_;
    protected onRadioGroupSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onSaveGuestChoiceCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected getPolicyIndicatorTooltipPosition_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engine-list-dialog': SettingsSearchEngineListDialogElement;
    }
}
export {};
