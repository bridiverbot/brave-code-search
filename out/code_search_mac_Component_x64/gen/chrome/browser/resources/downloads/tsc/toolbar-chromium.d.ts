import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/js/util.js';
import '/strings.m.js';
import type { CrToolbarElement } from 'chrome://resources/cr_elements/cr_toolbar/cr_toolbar.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { MojomData } from './data.js';
export interface DownloadsToolbarElement {
    $: {
        clearAll: HTMLElement;
        toolbar: CrToolbarElement;
    };
}
export declare class DownloadsToolbarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hasClearableDownloads: {
            type: BooleanConstructor;
        };
        items: {
            type: ArrayConstructor;
        };
        spinnerActive: {
            type: BooleanConstructor;
        };
    };
    private browserProxy_;
    accessor hasClearableDownloads: boolean;
    accessor spinnerActive: boolean;
    accessor items: MojomData[];
    updated(changedProperties: PropertyValues<this>): void;
    /** @return Whether removal can be undone. */
    canUndo(): boolean;
    /** @return Whether "Clear all" should be allowed. */
    canClearAll(): boolean;
    /** @return The full text being searched. */
    getSearchText(): string;
    focusOnSearchInput(): void;
    isSearchFocused(): boolean;
    protected onClearAllClick_(e: Event): void;
    protected onSearchChanged_(event: CustomEvent<string>): void;
    private updateClearAll_;
}
declare global {
    interface HTMLElementTagNameMap {
        'downloads-toolbar': DownloadsToolbarElement;
    }
}
