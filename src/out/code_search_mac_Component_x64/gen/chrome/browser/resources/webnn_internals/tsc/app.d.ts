import './contexts_viewer.js';
import './graph_dump.js';
import './info_page.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import type { CrTabsElement } from '//resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface WebnnInternalsAppElement {
    $: {
        tabs: CrTabsElement;
    };
}
export declare class WebnnInternalsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedTabIndex_: {
            type: NumberConstructor;
        };
    };
    protected accessor selectedTabIndex_: number;
    protected onSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'webnn-internals-app': WebnnInternalsAppElement;
    }
}
