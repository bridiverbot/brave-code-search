import 'chrome://resources/cr_components/composebox/composebox_favicon_group.js';
import 'chrome://resources/cr_components/composebox/composebox_tab_favicon.js';
import 'chrome://resources/cr_components/composebox/icons.html.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from 'chrome://resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from 'chrome://resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
export interface TabPickerAppElement {
    $: {
        shareTabsTrigger: HTMLButtonElement;
        tabMenu: CrActionMenuElement;
    };
}
export declare enum TabPickerUnboundedPresentationResult {
    SHOWN_UNBOUNDED = 0,
    FALLBACK_API_UNSUPPORTED = 1,
    SHOW_UNBOUNDED_ELEMENT_FAILED = 2,
    MAX_VALUE = 3
}
declare const TabPickerAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class TabPickerAppElement extends TabPickerAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tabSuggestions: {
            type: ArrayConstructor;
        };
        selectedTabs: {
            type: ArrayConstructor;
        };
        tabMenuOpen: {
            type: BooleanConstructor;
        };
        recentTabId: {
            type: NumberConstructor;
        };
        sharingTabsText_: {
            type: StringConstructor;
        };
        useUnbounded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        inputState: {
            type: ObjectConstructor;
        };
    };
    accessor tabSuggestions: TabInfo[];
    accessor selectedTabs: TabInfo[];
    accessor tabMenuOpen: boolean;
    accessor recentTabId: number | null;
    accessor useUnbounded: boolean;
    accessor darkMode: boolean;
    accessor inputState: InputState | null;
    protected accessor sharingTabsText_: string;
    private closeTimer_;
    private frameScreenOffset_;
    private pointerDownOnTrigger_;
    private shouldOpenMenu_;
    private openMenuRequestId_;
    private fetchSuggestionsRequestId_;
    private extensionListenerIds_;
    private searchboxListenerIds_;
    private browserProxy_;
    private unboundedInitPromise_;
    private menuOpenStartTime_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private initializeUnboundedMenu_;
    private fetchTabSuggestions_;
    protected isUnboundedMenuEnabled_(): boolean;
    protected isDarkModeEnabled_(): boolean;
    protected get hasTabSuggestions_(): boolean;
    private updateSharingTabsText_;
    protected getRecentTabsSuffix_(): string;
    protected isRecentTab_(tabId: number): boolean;
    protected isTabSelected_(tab: TabInfo): boolean;
    protected isTabDisabled_(tab: TabInfo): boolean;
    private setFocusOutlineVisible_;
    protected onShareTabsRowPointerenter_(e: PointerEvent): void;
    protected onShareTabsRowPointermove_(): void;
    protected onShareTabsRowPointerdown_(): void;
    protected onShareTabsRowPointerleave_(): void;
    protected onShareTabsRowFocus_(): void;
    protected onShareTabsRowClick_(e: MouseEvent): void;
    protected onShareTabsRowKeydown_(e: KeyboardEvent): void;
    protected onMenuKeydown_(e: KeyboardEvent): void;
    protected onMenuPointerenter_(): Promise<void>;
    protected onMenuPointermove_(): void;
    protected onMenuPointerleave_(): void;
    protected onMenuClose_(): void;
    protected onMenuUnboundedShown_(): void;
    protected onMenuUnboundedShowError_(): void;
    protected onTabClick_(e: Event): void;
    private updateFrameScreenOffset_;
    private openTabMenu_;
    private focusFirstTabItem_;
    openTabMenuForTesting(): Promise<void>;
    private recordMenuOpenMetrics_;
    private recordLatencyMetric_;
    private recordUserActionMetric_;
    private recordUnboundedResult_;
    private scheduleCloseTimer_;
    private cancelCloseTimer_;
}
declare global {
    interface HTMLElementTagNameMap {
        'tab-picker-app': TabPickerAppElement;
    }
}
export {};
