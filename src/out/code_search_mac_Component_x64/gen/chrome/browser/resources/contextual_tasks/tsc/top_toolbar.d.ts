import './icons.html.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import '//resources/cr_elements/icons.html.js';
import './account_menu.js';
import './favicon_group.js';
import './sources_menu.js';
import './overflow_menu.js';
import './profile_tooltip.js';
import '/shared/permission_dashboard.js';
import type { PermissionChipDelegate } from '/shared/permission_chip_delegate.js';
import type { PermissionDashboardState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { AccountMenuElement } from './account_menu.js';
import type { ContextInfo } from './contextual_tasks_toolbar.mojom-webui.js';
import type { OverflowMenuElement } from './overflow_menu.js';
import type { SourcesMenuElement } from './sources_menu.js';
export interface TopToolbarElement {
    $: {
        accountMenu: CrLazyRenderLitElement<AccountMenuElement>;
        closeButton: HTMLImageElement;
        overflowMenu: CrLazyRenderLitElement<OverflowMenuElement>;
        newThreadButton: HTMLImageElement;
        sourcesMenu: CrLazyRenderLitElement<SourcesMenuElement>;
        threadHistoryButton: HTMLImageElement;
    };
}
declare const TopToolbarElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class TopToolbarElement extends TopToolbarElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contextInfos: {
            type: ArrayConstructor;
        };
        darkMode: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isAiPage: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        enableOpenInNewTabButton: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        title: {
            type: StringConstructor;
        };
        hideOverflowMenuButton_: {
            type: BooleanConstructor;
        };
        isExpandButtonEnabled: {
            type: BooleanConstructor;
        };
        isPinButtonEnabled: {
            type: BooleanConstructor;
        };
        isPinned: {
            type: BooleanConstructor;
        };
        contextManagementInComposeboxEnabled_: {
            type: BooleanConstructor;
        };
        isAimEligible: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isCobrowseEligible: {
            type: BooleanConstructor;
        };
        isUserSignedIn: {
            type: BooleanConstructor;
        };
        onboardingTooltipShowing: {
            type: BooleanConstructor;
        };
        contextualTasksEnableSpatialModelToolbarLayout_: {
            type: BooleanConstructor;
        };
        contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_: {
            type: BooleanConstructor;
        };
        overflowMenuOpen_: {
            type: BooleanConstructor;
        };
        isSidePanelRearchitectureEnabled_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
        permissionDashboardState: {
            type: ObjectConstructor;
        };
        permissionChipDelegate_: {
            type: ObjectConstructor;
        };
        profileAvatarUrl: {
            type: StringConstructor;
        };
        accountFullName: {
            type: StringConstructor;
        };
        accountEmail: {
            type: StringConstructor;
        };
    };
    accessor title: string;
    accessor contextInfos: ContextInfo[];
    accessor darkMode: boolean;
    accessor isAiPage: boolean;
    accessor isAimEligible: boolean;
    accessor isCobrowseEligible: boolean;
    accessor permissionDashboardState: PermissionDashboardState | null;
    protected accessor permissionChipDelegate_: PermissionChipDelegate | null;
    accessor profileAvatarUrl: string;
    accessor accountFullName: string;
    accessor accountEmail: string;
    protected accessor isSidePanelRearchitectureEnabled_: boolean;
    accessor isUserSignedIn: boolean;
    accessor enableOpenInNewTabButton: boolean;
    accessor onboardingTooltipShowing: boolean;
    private toolbarBrowserProxy_;
    private toolbarListenerIds_;
    private sidePanelToolbarListenerIds_;
    protected accessor isExpandButtonEnabled: boolean;
    accessor isPinButtonEnabled: boolean;
    private hideOverflowMenuOnAiPageEnabled_;
    protected accessor contextualTasksEnableSpatialModelToolbarLayout_: boolean;
    protected accessor contextualTasksEnableSpatialModelToolbarLayoutNewThreadInOverflow_: boolean;
    accessor hideOverflowMenuButton_: boolean;
    protected accessor isPinned: boolean;
    protected accessor contextManagementInComposeboxEnabled_: boolean;
    protected accessor overflowMenuOpen_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private wasProfileIndicatorShown_;
    private boundOnWindowBlur_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onWindowBlur_;
    firstUpdated(_changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected isPermissionShowing_(): boolean;
    protected shouldShowSourcesMenuButton_(): boolean;
    protected onPinClick_(): void;
    protected onCloseButtonClick_(): void;
    protected onNewThreadClick_(): void;
    protected onOverflowMenuNewThreadClick_(e: Event): void;
    protected onThreadHistoryClick_(): void;
    protected onOverflowMenuButtonClick_(e: Event): void;
    protected onOverflowMenuOpenChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onProfileIndicatorClick_(e: Event): void;
    protected onSourcesClick_(e: Event): void;
    protected onOpenInNewTabClick_(): void;
    protected onLogoPointerdown_(): void;
    protected onLogoClick_(e: Event): void;
    protected onProfileIndicatorPointerenter_(e: PointerEvent): void;
    protected onProfileIndicatorPointerleave_(): void;
    private getProfileTooltip_;
}
declare global {
    interface HTMLElementTagNameMap {
        'top-toolbar': TopToolbarElement;
    }
}
export {};
