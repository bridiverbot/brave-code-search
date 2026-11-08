import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './profile_card.js';
import '/strings.m.js';
import './signin_error_dialog.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { DraggableTileListInterface } from './drag_drop_reorder_tile_list_delegate.js';
import type { ProfileState } from './manage_profiles_browser_proxy.js';
import { Routes } from './navigation_mixin.js';
import type { SigninErrorDialogElement } from './signin_error_dialog.js';
export interface ProfilePickerMainViewElement {
    $: {
        addProfile: CrButtonElement;
        pickerLogo: HTMLElement;
        browseAsGuestButton: HTMLElement;
        profilesContainer: HTMLElement;
        profilesWrapper: HTMLElement;
        signinErrorDialog: SigninErrorDialogElement;
    };
}
declare const ProfilePickerMainViewElementBase: typeof CrLitElement & (new (...args: any[]) => import("./navigation_mixin.js").NavigationMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export declare class ProfilePickerMainViewElement extends ProfilePickerMainViewElementBase implements DraggableTileListInterface {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Profiles list supplied by ManageProfilesBrowserProxy.
         */
        profilesList_: {
            type: ArrayConstructor;
        };
        profilesListLoaded_: {
            type: BooleanConstructor;
        };
        hideAskOnStartup_: {
            type: BooleanConstructor;
        };
        askOnStartup_: {
            type: BooleanConstructor;
        };
        guestModeEnabled_: {
            type: BooleanConstructor;
        };
        profileCreationAllowed_: {
            type: BooleanConstructor;
        };
        pickerButtonsDisabled_: {
            type: BooleanConstructor;
        };
        isGlic_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isRefreshedUI_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor profilesList_: ProfileState[];
    protected accessor profilesListLoaded_: boolean;
    protected accessor hideAskOnStartup_: boolean;
    protected accessor askOnStartup_: boolean;
    protected accessor guestModeEnabled_: boolean;
    protected accessor profileCreationAllowed_: boolean;
    protected accessor isGlic_: boolean;
    private manageProfilesBrowserProxy_;
    private resizeObserver_;
    private previousRoute_;
    private dragDelegate_;
    private dragDuration_;
    protected accessor pickerButtonsDisabled_: boolean;
    protected accessor isRefreshedUI_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    onRouteChange(route: Routes): void;
    private onViewEnterFinish_;
    private addResizeObserver_;
    protected onProductLogoClick_(): void;
    /**
     * Initializes the drag delegate, making sure to clear a previously existing
     * one.
     */
    private initializeDragDelegate_;
    /**
     * Handler for when the profiles list are updated.
     */
    private handleProfilesListChanged_;
    /**
     * Called when the user modifies 'Ask on startup' preference.
     */
    protected onAskOnStartupCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onAddProfileClick_(): void;
    protected onLaunchGuestProfileClick_(): void;
    private maybeUpdateGuestMode_;
    private handleProfileRemoved_;
    private computeHideAskOnStartup_;
    protected onToggleDrag_(e: CustomEvent<{
        toggle: boolean;
    }>): void;
    protected onDisableAllPickerButtons_(): void;
    private disableAllPickerButtons_;
    private enableAllPickerButtons_;
    private onLearnMoreClicked_;
    protected getTitle_(): TrustedHTML;
    protected getSubtitle_(): TrustedHTML;
    protected shouldHideProfilesWrapper_(): boolean;
    protected shouldHideFooterText_(): boolean;
    private isProfileListLoadedAndEmptyAndGlic_;
    private updateLearnMoreLinkEvents_;
    onDragEnd(initialIndex: number, finalIndex: number): void;
    getDraggableTile(index: number): HTMLElement;
    getDraggableTileIndex(tile: HTMLElement): number;
    setDraggingTransitionDurationForTesting(duration: number): void;
    getProfileListForTesting(): ProfileState[];
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-picker-main-view': ProfilePickerMainViewElement;
    }
}
export {};
