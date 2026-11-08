import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './database_tab.js';
import './discards_tab.js';
import './graph_tab.js';
import './memory_tab.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class DiscardsMainElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selected: {
            type: NumberConstructor;
        };
        tabs: {
            type: ArrayConstructor;
        };
    };
    protected accessor selected: number;
    protected accessor tabs: string[];
    firstUpdated(): void;
    /** Updates the location hash on selection change. */
    protected onSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    /**
     * Returns the index of the currently selected tab corresponding to the
     * path or zero if no match.
     */
    private selectedFromPath_;
    /** Updates the selection property on path change. */
    private pathChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'discards-main': DiscardsMainElement;
    }
}
