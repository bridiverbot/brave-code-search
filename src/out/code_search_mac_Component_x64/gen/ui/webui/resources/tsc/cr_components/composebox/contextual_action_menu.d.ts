import './icons.html.js';
import './searchbox_config_icons.html.js';
import './composebox_tab_favicon.js';
import './composebox_favicon_group.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { CrActionMenuElement } from '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { InputState } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import { InputType, ModelMode, ToolMode } from '//resources/mojo/components/omnibox/composebox/composebox_query.mojom-webui.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import { SingleTabType } from './common.js';
export declare const SHARE_TABS_FLYOUT_GAP_PX = 0;
export declare const DEFAULT_FLYOUT_WIDTH_PX = 320;
export declare const VIEWPORT_BUFFER_PX = 16;
export declare const MIN_MENU_HEIGHT_PX = 100;
export declare const SHARE_TABS_FLYOUT_MAX_HEIGHT_PX = 344;
export declare const SHARE_TABS_FLYOUT_INDENT_PX = 114;
export declare const DEFAULT_MAX_MENU_HEIGHT_PX = 540;
export interface ContextualActionMenuElement {
    $: {
        menu: CrActionMenuElement;
    };
}
declare const ContextualActionMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ContextualActionMenuElement extends ContextualActionMenuElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        fileNum: {
            type: NumberConstructor;
        };
        nonTabFileNum: {
            type: NumberConstructor;
        };
        selectedTabIds: {
            type: ObjectConstructor;
        };
        aimThreadRestoredTabs: {
            type: ArrayConstructor;
        };
        tabSuggestions: {
            type: ArrayConstructor;
        };
        inputState: {
            type: ObjectConstructor;
        };
        smartTabSharingActive: {
            type: BooleanConstructor;
        };
        smartTabSharingVisible: {
            type: BooleanConstructor;
        };
        enableMultiTabSelection_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        tabPreviewUrl_: {
            type: StringConstructor;
        };
        tabPreviewsEnabled_: {
            type: BooleanConstructor;
        };
        showContextMenuHeaders_: {
            type: BooleanConstructor;
        };
        disableAutoReposition: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled: {
            reflect: boolean;
            type: BooleanConstructor;
            attribute: string;
        };
        shareTabsFlyoutOpen: {
            reflect: boolean;
            type: BooleanConstructor;
            attribute: string;
        };
        shareTabsFlyoutPosition_: {
            type: StringConstructor;
        };
        sharingTabsText_: {
            type: StringConstructor;
        };
        isSidePanel: {
            type: BooleanConstructor;
        };
        recentTabId: {
            type: NumberConstructor;
        };
        unboundedMenuEnabled: {
            reflect: boolean;
            type: BooleanConstructor;
            attribute: string;
        };
        isOpen_: {
            type: BooleanConstructor;
        };
        contextMenuTooltipsEnabled: {
            type: BooleanConstructor;
        };
        singleTabIndex_: {
            type: NumberConstructor;
        };
        singleTab_: {
            type: ObjectConstructor;
        };
    };
    accessor recentTabId: number | null;
    accessor fileNum: number;
    accessor nonTabFileNum: number;
    accessor selectedTabIds: Map<number, UnguessableToken>;
    accessor aimThreadRestoredTabs: TabInfo[];
    accessor tabSuggestions: TabInfo[];
    accessor inputState: InputState | null;
    accessor smartTabSharingActive: boolean;
    accessor smartTabSharingVisible: boolean;
    accessor contextManagementInComposeboxEnabled: boolean;
    accessor contextMenuTooltipsEnabled: boolean;
    accessor disableAutoReposition: boolean;
    accessor isSidePanel: boolean;
    accessor shareTabsFlyoutOpen: boolean;
    accessor unboundedMenuEnabled: boolean;
    private setShareTabsFlyoutOpen_;
    protected accessor enableMultiTabSelection_: boolean;
    protected accessor tabPreviewUrl_: string;
    protected accessor tabPreviewsEnabled_: boolean;
    protected maxFileCount_: number;
    private metricsSource_;
    protected accessor showContextMenuHeaders_: boolean;
    protected enableTabDeselection_: boolean;
    private singleTabMenuItemEnabled_;
    protected accessor singleTabIndex_: number;
    protected accessor singleTab_: TabInfo | null;
    protected accessor shareTabsFlyoutPosition_: string;
    protected accessor sharingTabsText_: string;
    protected get closeMenuOnSelect(): boolean;
    private closeTimer_;
    private pointerOverTrigger_;
    private pointerOverFlyout_;
    private shouldResetFlyoutScroll_;
    private firstTabBeingAdded_;
    private pendingTabAddId_;
    private anchor_;
    private wasShareTabsTriggerShown_;
    private wasShareTabsFlyoutOpen_;
    private wasSmartTabSharingOptionShown_;
    private accessor isOpen_;
    protected get supportedTools_(): Map<ToolMode, {
        icon: string;
    }>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    get open(): boolean;
    close(): void;
    private onWindowBlur_;
    private layoutResizeObserver_?;
    private lastConfig_?;
    private reposition_;
    getDialog(): HTMLDialogElement;
    private computeMenuWidth_;
    private constrainMenuHeight_;
    private computeHorizontalLimit_;
    showAt(anchor: HTMLElement): void;
    private manageShareTabsInitialFocus_;
    private updateSharingTabsText_;
    private isItemDisabled_;
    protected isToolAllowed_(tool: ToolMode): boolean;
    protected isToolDisabled_(tool: ToolMode): boolean;
    protected isToolActive_(tool: ToolMode): boolean;
    protected isModelAllowed_(model: ModelMode): boolean;
    protected isModelDisabled_(model: ModelMode): boolean;
    protected isModelActive_(model: ModelMode): boolean;
    protected isTabSelected_(tabOrId: TabInfo | number): boolean;
    protected getSubmittedTabIds_(): Set<number>;
    protected getToolLabel_(tool: ToolMode): string;
    protected getModelLabel_(model: ModelMode): string;
    protected getToolTooltip_(tool: ToolMode): string;
    protected getModelTooltip_(model: ModelMode): string;
    protected getShareTabsTooltip_(): string;
    protected getToolHeader_(): string;
    protected getModelHeader_(): string;
    protected getInputTypeLabel_(inputType: InputType): string;
    private isItemAllowed_;
    protected isInputTypeAllowed_(...types: InputType[]): boolean;
    protected isInputTypeDisabled_(inputType: InputType): boolean;
    protected isShareTabsTriggerDisabled_(): boolean;
    protected isTabDisabled_(tab: TabInfo): boolean;
    protected getSelectedTabs_(): TabInfo[];
    private computeSingleTabIndex_;
    protected shouldShowSingleTabItem_(): boolean;
    protected onSmartTabSharingItemClick_(): void;
    private toggleSmartTabSharing_;
    setSmartTabSharingToggle(active: boolean): void;
    protected onTabClick_(e: Event): void;
    private recordTabSelectedMetric_;
    protected maybeCloseMenuBasedOnEntrypoint_(): void;
    protected deleteTabContext_(tabId: number): void;
    protected addTabContext_(tabInfo: TabInfo, singleTabType?: SingleTabType): void;
    private get hasTabSuggestions_();
    protected onShareTabsRowPointerenter_(): void;
    protected onShareTabsRowPointerleave_(): void;
    protected onShareTabsFlyoutPointerenter_(): void;
    protected onShareTabsFlyoutPointerleave_(): void;
    protected onShareTabsRowKeydown_(e: KeyboardEvent): void;
    protected onShareTabsFlyoutKeydown_(e: KeyboardEvent): void;
    private updateFlyoutPosition_;
    private scheduleCloseTimer_;
    private cancelCloseTimer_;
    private resetShareTabsFlyout_;
    private updateScrollable_;
    protected onTabPointerenter_(e: Event): void;
    protected shouldShowTabPreview_(): boolean;
    protected onImageUploadClick_(): void;
    protected onDriveUploadClick_(): void;
    protected onFileUploadClick_(): void;
    protected onToolClick_(e: Event): void;
    protected onModelClick_(e: Event): void;
    protected onMenuClose_(): void;
    protected getIconForToolMode_(mode: ToolMode): string | undefined;
    protected getIconForModelMode_(mode: ModelMode): string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-contextual-action-menu': ContextualActionMenuElement;
    }
}
export {};
