/**
 * @fileoverview
 * 'settings-site-shortcuts-page' is the settings page containing site
 * shortcuts.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import './search_engine_edit_dialog.js';
import './search_engines_list.js';
import '../settings_page/settings_section.js';
import '../simple_confirmation_dialog.js';
import type { CrExpandButtonElement } from 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
import type { SettingsSearchEnginesListElement } from './search_engines_list.js';
export interface SiteShortcutsPageElement {
    $: {
        activeShortcutsRow: CrExpandButtonElement;
        activeShortcutsList: SettingsSearchEnginesListElement;
        addSearchEngine: HTMLElement;
        inactiveShortcutsRow: CrExpandButtonElement;
        inactiveShortcutsList: SettingsSearchEnginesListElement;
        noActiveShortcutsFound: HTMLElement;
        noInactiveShortcutsFound: HTMLElement;
    };
}
declare const SiteShortcutsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SiteShortcutsPageElement extends SiteShortcutsPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        activeShortcuts: {
            type: ArrayConstructor;
        };
        inactiveShortcuts: {
            type: ArrayConstructor;
        };
        activeShortcutsExpanded_: {
            type: BooleanConstructor;
        };
        inactiveShortcutsExpanded_: {
            type: BooleanConstructor;
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
    accessor activeShortcuts: SearchEngine[];
    accessor inactiveShortcuts: SearchEngine[];
    protected accessor activeShortcutsExpanded_: boolean;
    protected accessor inactiveShortcutsExpanded_: boolean;
    protected accessor dialogModel_: SearchEngine | null;
    protected accessor dialogAnchorElement_: HTMLElement | null;
    protected accessor showEditDialog_: boolean;
    protected accessor showDeleteConfirmationDialog_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    private enginesChanged_;
    private openEditDialog_;
    protected onEditDialogClose_(): void;
    private onEditSearchEngine_;
    private openDeleteConfirmationDialog_;
    protected onDeleteConfirmationDialogClose_(): void;
    private onDeleteSearchEngine_;
    protected onAddSearchEngineClick_(e: Event): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onActiveShortcutsExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onInactiveShortcutsExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    private onSectionExpandedChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-site-shortcuts-page': SiteShortcutsPageElement;
    }
}
export {};
