import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './host_permissions_toggle_list.js';
import './icons.html.js';
import './runtime_host_permissions.js';
import '/strings.m.js';
import './toggle_row.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrTooltipIconElement } from 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
import type { Mv2DeprecationDelegate } from './mv2_deprecation_delegate.js';
export interface ExtensionsDetailViewElement {
    $: {
        closeButton: HTMLElement;
        description: HTMLElement;
        enableToggle: CrToggleElement;
        extensionsActivityLogLink: HTMLElement;
        extensionsOptions: CrLinkRowElement;
        parentDisabledPermissionsToolTip: CrTooltipIconElement;
        rateLink: CrLinkRowElement;
        source: HTMLElement;
    };
}
declare const ExtensionsDetailViewElementBase: typeof CrLitElement & (new (...args: any[]) => import("./item_mixin.js").ItemMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The underlying ExtensionInfo for the details being displayed.
         */
        data: {
            type: ObjectConstructor;
        };
        size_: {
            type: StringConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        /** Whether the user has enabled the UI's developer mode. */
        inDevMode: {
            type: BooleanConstructor;
        };
        /**
         * Whether enhanced site controls have been enabled (through a feature
         * flag). For this page, there are some changes to the site permissions
         * section.
         */
        enableEnhancedSiteControls: {
            type: BooleanConstructor;
        };
        /** Whether "allow in incognito" option should be shown. */
        incognitoAvailable: {
            type: BooleanConstructor;
        };
        /** Whether "View Activity Log" link should be shown. */
        showActivityLog: {
            type: BooleanConstructor;
        };
        /** Whether the user navigated to this page from the activity log page. */
        fromActivityLog: {
            type: BooleanConstructor;
        };
        /** Inspectable views sorted to put background/service workers first */
        sortedViews_: {
            type: ArrayConstructor;
        };
        /** Whether the extensions safety check warning is shown. */
        showSafetyCheck_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor data: chrome.developerPrivate.ExtensionInfo;
    accessor delegate: ItemDelegate & Mv2DeprecationDelegate;
    accessor inDevMode: boolean;
    accessor enableEnhancedSiteControls: boolean;
    accessor incognitoAvailable: boolean;
    accessor showActivityLog: boolean;
    accessor fromActivityLog: boolean;
    protected accessor showSafetyCheck_: boolean;
    protected accessor size_: string;
    protected accessor sortedViews_: chrome.developerPrivate.ExtensionView[];
    protected accessor webuiRoundedIconsEnabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Focuses the extensions options button. This should be used after the
     * dialog closes.
     */
    focusOptionsButton(): void;
    /**
     * Focuses the back button when page is loaded.
     */
    private onViewEnterStart_;
    private onItemIdChanged_;
    protected onActivityLogClick_(): void;
    protected getDescription_(): string;
    protected getBackButtonAriaLabel_(): string;
    protected getBackButtonAriaRoleDescription_(): string;
    protected getEnableToggleAriaLabel_(): string;
    protected onCloseButtonClick_(): void;
    protected isEnabled_(): boolean;
    protected isEnableToggleEnabled_(): boolean;
    protected hasDependentExtensions_(): boolean;
    protected hasSevereWarnings_(): boolean;
    protected showAccountUploadButton_(): boolean;
    protected showDevReloadButton_(): boolean;
    protected computeEnabledStyle_(): string;
    protected computeEnabledText_(): string;
    protected computeInspectLabel_(view: chrome.developerPrivate.ExtensionView): string;
    protected shouldShowOptionsLink_(): boolean;
    protected shouldShowOptionsSection_(): boolean;
    protected canPinToToolbar_(): boolean;
    protected shouldShowIncognitoOption_(): boolean;
    protected showUserScriptSectionToggle_(): boolean;
    protected onEnableToggleChange_(): void;
    protected onInspectClick_(e: Event): void;
    protected onExtensionOptionsClick_(): void;
    protected onReloadClick_(): void;
    protected onUploadClick_(): Promise<void>;
    protected onRemoveClick_(): void;
    protected onKeepClick_(): void;
    /**
     * Triggers the extension's removal.
     */
    protected onRemoveButtonClick_(): void;
    protected onRepairClick_(): void;
    protected onLoadPathClick_(): void;
    protected onPinnedToToolbarChange_(): void;
    protected onAllowIncognitoChange_(): void;
    protected onAllowUserScriptsChange_(): void;
    protected onAllowOnFileUrlsChange_(): void;
    protected onCollectErrorsChange_(): void;
    protected onExtensionWebSiteClick_(): void;
    protected onSiteSettingsClick_(): void;
    protected onViewInStoreClick_(): void;
    protected showOpenReviewPageLink_(): boolean;
    protected onOpenReviewPageClick_(): void;
    protected computeDependentEntry_(item: chrome.developerPrivate.DependentExtension): string;
    protected computeSourceString_(): string;
    protected hasPermissions_(): boolean;
    protected getNoPermissionsString_(): string;
    private hasRuntimeHostPermissions_;
    protected showSiteAccessSection_(): boolean;
    protected showSiteAccessContent_(): boolean;
    protected showFreeformRuntimeHostPermissions_(): boolean;
    protected showHostPermissionsToggleList_(): boolean;
    protected showEnableAccessRequestsToggle_(): boolean;
    protected onShowAccessRequestsChange_(): void;
    protected showReloadButton_(): boolean;
    private computeShowSafetyCheck_;
    /**
     * Returns whether the mv2 deprecation message should be displayed.
     */
    protected shouldShowMv2DeprecationMessage_(): boolean;
    /**
     * Returns whether the remove button in the mv2 deprecation message should be
     * displayed.
     */
    protected shouldShowMv2DeprecationRemoveButton_(): boolean;
    /**
     * Returns whether the action menu button in the mv2 deprecation message
     * should be displayed.
     */
    protected shouldShowMv2DeprecationActionMenu_(): boolean;
    /**
     * Returns whether the find alternative button in mv2 deprecation message
     * action menu should be displayed.
     */
    protected shouldShowMv2DeprecationFindAlternativeAction_(): boolean;
    protected shouldShowBlocklistText_(): boolean;
    /**
     * Shows only one text if both unsupported developer extension and safety
     * check texts are present. Safety check text takes precedence.
     */
    protected shouldShowUnsupportedDeveloperExtensionText_(): boolean;
    protected showRepairButton_(): boolean;
    protected showEnableToggle_(): boolean;
    protected showAllowlistWarning_(): boolean;
    /** Opens the action menu for the extension. */
    protected onActionMenuButtonClick_(event: MouseEvent): void;
    /**
     * Opens a URL in the Web Store with extensions recommendations for the
     * extension.
     */
    protected onFindAlternativeActionClick_(): void;
    /**
     * Returns the Manifest V2 deprecation message header.
     */
    protected getMv2DeprecationMessageHeader_(): string;
    /**
     * Returns the HTML representation of the Manifest V2 deprecation message
     * subtitle string. We need the HTML representation instead of the string
     * since the string holds substitutions.
     */
    protected getMv2DeprecationMessageSubtitle_(): TrustedHTML;
    /**
     * Returns the Manifest V2 deprecation message icon.
     */
    protected getMv2DeprecationMessageIcon_(): string;
    /** Returns the accessible label for the action menu button */
    protected getActionMenuButtonLabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-detail-view': ExtensionsDetailViewElement;
    }
}
export {};
