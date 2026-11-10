import './tab_focus/tab_focus_page.js';
import '//resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export declare class BraveTabSearchAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        availableHeight: {
            type: NumberConstructor;
        };
        tabOrganizationEnabled_: {
            type: BooleanConstructor;
        };
        selectedTabIndex_: {
            type: NumberConstructor;
        };
    };
    accessor availableHeight: number;
    protected accessor tabOrganizationEnabled_: boolean;
    protected accessor selectedTabIndex_: number;
    private listenerIds_;
    private visibilityChangedListener_;
    protected tabNames_(): string[];
    protected onTabSelectedChanged_(e: CustomEvent<{
        value: number;
    }>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'brave-tab-search-app': BraveTabSearchAppElement;
    }
}
