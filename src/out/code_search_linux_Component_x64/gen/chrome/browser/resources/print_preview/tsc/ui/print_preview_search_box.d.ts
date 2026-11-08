import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare global {
    interface HTMLElementEventMap {
        'search-changed': CustomEvent<string>;
    }
}
export interface PrintPreviewSearchBoxElement {
    $: {
        searchInput: CrInputElement;
    };
}
declare const PrintPreviewSearchBoxElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/cr_search_field/cr_search_field_mixin_lit.js").CrSearchFieldMixinLitInterface);
export declare class PrintPreviewSearchBoxElement extends PrintPreviewSearchBoxElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        autofocus: {
            type: BooleanConstructor;
        };
        searchQuery: {
            type: ObjectConstructor;
            notify: boolean;
        };
    };
    accessor autofocus: boolean;
    accessor searchQuery: RegExp | null;
    private lastQuery_;
    firstUpdated(): void;
    getSearchInput(): CrInputElement;
    focus(): void;
    private onSearchChanged_;
    protected onClearClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-search-box': PrintPreviewSearchBoxElement;
    }
}
export {};
