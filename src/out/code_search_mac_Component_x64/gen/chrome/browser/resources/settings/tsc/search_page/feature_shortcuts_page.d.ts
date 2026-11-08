/**
 * @fileoverview
 * 'settings-feature-shortcuts-page' is the settings page containing
 * feature and extension shortcuts.
 */
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import './search_engines_list.js';
import '../settings_page/settings_section.js';
import type { CrExpandButtonElement } from 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
import type { SettingsSearchEnginesListElement } from './search_engines_list.js';
export interface FeatureShortcutsPageElement {
    $: {
        activeShortcutsList: SettingsSearchEnginesListElement;
        activeShortcutsRow: CrExpandButtonElement;
        inactiveShortcutsList: SettingsSearchEnginesListElement;
        inactiveShortcutsRow: CrExpandButtonElement;
        noActiveShortcutsFound: HTMLElement;
        noInactiveShortcutsFound: HTMLElement;
    };
}
declare const FeatureShortcutsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class FeatureShortcutsPageElement extends FeatureShortcutsPageElementBase {
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
    };
    accessor activeShortcuts: SearchEngine[];
    accessor inactiveShortcuts: SearchEngine[];
    protected accessor activeShortcutsExpanded_: boolean;
    protected accessor inactiveShortcutsExpanded_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private enginesChanged_;
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
        'settings-feature-shortcuts-page': FeatureShortcutsPageElement;
    }
}
export {};
