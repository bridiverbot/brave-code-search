/**
 * @fileoverview 'settings-search-engines-list' is a component for showing a
 * list of search engines.
 */
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import './search_engine_entry.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SearchEngine } from './search_engines_browser_proxy.js';
export declare class SettingsSearchEnginesListElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        engines: {
            type: ArrayConstructor;
        };
        showShortcut: {
            type: BooleanConstructor;
        };
        showQueryUrl: {
            type: BooleanConstructor;
        };
        collapseList: {
            type: BooleanConstructor;
        };
        visibleEnginesSize: {
            type: NumberConstructor;
        };
        visibleEngines_: {
            type: ArrayConstructor;
        };
        collapsedEngines_: {
            type: ArrayConstructor;
        };
        expandListText: {
            type: StringConstructor;
        };
        fixedHeight: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        enginesListExpanded_: {
            type: BooleanConstructor;
        };
    };
    accessor engines: SearchEngine[];
    accessor showShortcut: boolean;
    accessor showQueryUrl: boolean;
    accessor collapseList: boolean;
    accessor visibleEnginesSize: number;
    accessor expandListText: string;
    accessor fixedHeight: boolean;
    protected accessor enginesListExpanded_: boolean;
    protected accessor visibleEngines_: SearchEngine[];
    protected accessor collapsedEngines_: SearchEngine[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onEnginesListExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-search-engines-list': SettingsSearchEnginesListElement;
    }
}
