import '/strings.m.js';
import '../tab_search_item.js';
import '../selectable_lazy_list.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SelectableLazyListElement } from '../selectable_lazy_list.js';
import { TabData } from '../tab_data.js';
export interface SplitNewTabPageAppElement {
    $: {
        header: HTMLElement;
        splitTabsList: SelectableLazyListElement<TabData>;
    };
}
export declare class SplitNewTabPageAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        allEligibleTabs_: {
            type: ArrayConstructor;
        };
        minViewportHeight_: {
            type: NumberConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor allEligibleTabs_: TabData[];
    protected accessor minViewportHeight_: number;
    protected title_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private apiProxy_;
    private initialFocusPromise_;
    private listenerIds_;
    private visibilityChangedListener_;
    get initialFocusPromiseForTesting(): Promise<void> | null;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onCloseClick_(): void;
    protected onCloseButtonFocus_(): void;
    protected onCloseButtonBlur_(): void;
    protected onTabClick_(e: Event): void;
    protected onTabFocus_(e: Event): void;
    protected onTabFocusout_(_: Event): void;
    protected onTabKeydown_(e: KeyboardEvent): void;
    private onTabsChanged_;
    private focusFirstTab_;
    private onTabUpdated_;
    private onTabsRemoved_;
    private sortTabs_;
    private getTabData_;
    private redirectToNtp_;
    private hostWindowChanged_;
    private updateViewportHeight_;
}
declare global {
    interface HTMLElementTagNameMap {
        'split-new-tab-page-app': SplitNewTabPageAppElement;
    }
}
