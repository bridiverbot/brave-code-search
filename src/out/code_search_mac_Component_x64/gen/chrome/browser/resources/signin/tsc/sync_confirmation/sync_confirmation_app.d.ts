import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import '/icons.html.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SyncBenefit } from './sync_confirmation_browser_proxy.js';
declare const SyncConfirmationAppElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SyncConfirmationAppElement extends SyncConfirmationAppElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        accountImageSrc_: {
            type: StringConstructor;
        };
        anyButtonClicked_: {
            type: BooleanConstructor;
        };
        isModalDialog_: {
            type: BooleanConstructor;
        };
        showEnterpriseBadge_: {
            type: BooleanConstructor;
        };
        syncBenefitsList_: {
            type: ArrayConstructor;
        };
        /**
         * Whether to show the new UI for Browser Sync Settings and which include
         * sublabel and Apps toggle shared between Ash and Lacros.
         */
        useClickableSyncInfoDesc_: {
            type: BooleanConstructor;
        };
        /** Determines the screen mode. */
        screenMode_: {
            type: NumberConstructor;
        };
    };
    protected accessor accountImageSrc_: string;
    protected accessor anyButtonClicked_: boolean;
    protected accessor isModalDialog_: boolean;
    private accessor showEnterpriseBadge_;
    protected accessor syncBenefitsList_: SyncBenefit[];
    private syncConfirmationBrowserProxy_;
    protected accessor useClickableSyncInfoDesc_: boolean;
    private accessor screenMode_;
    connectedCallback(): void;
    protected onConfirmClick_(e: Event): void;
    protected onUndoClick_(): void;
    protected onGoToSettingsClick_(e: Event): void;
    /**
     * @param path Path of the click event. Must contain a consent confirmation
     *     element.
     * @return The text of the consent confirmation element.
     */
    private getConsentConfirmation_;
    /** @return Text of the consent description elements. */
    private getConsentDescription_;
    private handleAccountInfoChanged_;
    private handleScreenModeChanged_;
    protected getConfirmButtonClass_(): string;
    protected getNotNowButtonClass_(): string;
    protected isPending_(): boolean;
    protected shouldHideEnterpriseBadge_(): boolean;
    /**
     * Called when the link to the device's sync settings is clicked.
     */
    protected onDisclaimerLinkClicked_(event: CustomEvent<{
        event: Event;
    }>): void;
    /**
     * Returns the name of class to apply on some tags to enable animations.
     * May be empty if no animations should be added.
     */
    protected getAnimationClass_(): string;
    /**
     * Returns either "dialog" or an empty string.
     *
     * The returned value is intended to be added as a class on the root tags of
     * the element. Some styles from `tangible_sync_style_shared.css` rely on the
     * presence of this "dialog" class.
     */
    protected getMaybeDialogClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'sync-confirmation-app': SyncConfirmationAppElement;
    }
}
export {};
