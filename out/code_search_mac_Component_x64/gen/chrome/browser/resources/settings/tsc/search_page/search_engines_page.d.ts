/**
 * @fileoverview 'settings-search-engines-page' is the settings page
 * containing search engines settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../simple_confirmation_dialog.js';
import './search_engine_edit_dialog.js';
import './search_engines_list.js';
import './omnibox_extension_entry.js';
import '../settings_page/settings_subpage.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsRadioGroupElement } from '../controls/settings_radio_group.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export interface SettingsSearchEnginesPageElement {
    $: {
        keyboardShortcutSettingGroup: SettingsRadioGroupElement;
    };
}
declare const SettingsSearchEnginesPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSearchEnginesPageElement extends SettingsSearchEnginesPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        defaultEngines: {
            type: ArrayConstructor;
        };
        activeEngines: {
            type: ArrayConstructor;
        };
        otherEngines: {
            type: ArrayConstructor;
        };
        extensions: {
            type: ArrayConstructor;
        };
        showExtensionsList_: {
            type: BooleanConstructor;
        };
        /** Filters out all search engines that do not match. */
        filter_: {
            type: StringConstructor;
        };
        matchingDefaultEngines_: {
            type: ArrayConstructor;
        };
        matchingActiveEngines_: {
            type: ArrayConstructor;
        };
        matchingOtherEngines_: {
            type: ArrayConstructor;
        };
        matchingExtensions_: {
            type: ArrayConstructor;
        };
        dialogModel_: {
            type: ObjectConstructor;
        };
        dialogAnchorElement_: {
            type: ObjectConstructor;
        };
        showEditDialog_: {
            type: BooleanConstructor;
        };
        showDeleteConfirmationDialog_: {
            type: BooleanConstructor;
        };
    };
    accessor defaultEngines: SearchEngine[];
    accessor activeEngines: SearchEngine[];
    accessor otherEngines: SearchEngine[];
    accessor extensions: SearchEngine[];
    protected accessor showExtensionsList_: boolean;
    protected accessor filter_: string;
    protected accessor matchingDefaultEngines_: SearchEngine[];
    protected accessor matchingActiveEngines_: SearchEngine[];
    protected accessor matchingOtherEngines_: SearchEngine[];
    protected accessor matchingExtensions_: SearchEngine[];
    protected accessor dialogModel_: SearchEngine | null;
    protected accessor dialogAnchorElement_: HTMLElement | null;
    protected accessor showEditDialog_: boolean;
    protected accessor showDeleteConfirmationDialog_: boolean;
    private browserProxy_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    private openEditDialog_;
    private openDeleteConfirmationDialog_;
    protected getDeleteConfirmationBodyText_(searchEngine: SearchEngine | null): string;
    protected onEditDialogClose_(): void;
    protected onDeleteConfirmationDialogClose_(): void;
    private onEditSearchEngine_;
    private onDeleteSearchEngine_;
    private enginesChanged_;
    protected onAddSearchEngineClick_(e: Event): void;
    /**
     * Filters the given list based on the currently existing filter string.
     */
    private computeMatchingEngines_;
    /**
     * @param list The original list.
     * @param filteredList The filtered list.
     * @return Whether to show the "no results" message.
     */
    protected showNoResultsMessage_(list: SearchEngine[], filteredList: SearchEngine[]): boolean;
    protected onKeyboardShortcutSettingChange_(): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engines-page': SettingsSearchEnginesPageElement;
    }
}
export {};
