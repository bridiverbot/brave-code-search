import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/js/action_link.js';
import './icons.html.js';
import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { ChromeEvent } from '/tools/typescript/definitions/chrome_event.js';
import type { CrToggleElement } from 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { TooltipPosition } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ItemDelegate {
    deleteItem(id: string): void;
    deleteItems(ids: string[]): Promise<void>;
    uninstallItem(id: string): Promise<void>;
    openReviewPage(id: string): Promise<void>;
    setItemEnabled(id: string, isEnabled: boolean): Promise<void>;
    setItemAllowedIncognito(id: string, isAllowedIncognito: boolean): void;
    setItemAllowedUserScripts(id: string, isAllowedUserScripts: boolean): void;
    setItemAllowedOnFileUrls(id: string, isAllowedOnFileUrls: boolean): void;
    setItemHostAccess(id: string, hostAccess: chrome.developerPrivate.HostAccess): void;
    setItemCollectsErrors(id: string, collectsErrors: boolean): void;
    inspectItemView(id: string, view: chrome.developerPrivate.ExtensionView): void;
    openUrl(url: string): void;
    reloadItem(id: string): Promise<void>;
    repairItem(id: string): void;
    showItemOptionsPage(extension: chrome.developerPrivate.ExtensionInfo): void;
    showInFolder(id: string): void;
    getExtensionSize(id: string): Promise<string>;
    addRuntimeHostPermission(id: string, host: string): Promise<void>;
    removeRuntimeHostPermission(id: string, host: string): Promise<void>;
    setItemSafetyCheckWarningAcknowledged(id: string, reason: chrome.developerPrivate.SafetyCheckWarningReason): void;
    setShowAccessRequestsInToolbar(id: string, showRequests: boolean): void;
    setItemPinnedToToolbar(id: string, pinnedToToolbar: boolean): void;
    uploadItemToAccount(id: string): Promise<boolean>;
    setProfileExtensionsPinnedByDefault(extensionsPinnedByDefault: boolean): void;
    recordUserAction(metricName: string): void;
    getItemStateChangedTarget(): ChromeEvent<(data: chrome.developerPrivate.EventData) => void>;
    showSiteSettings(id: string): void;
}
export declare class FakeChromeEvent {
    addListener(_listener: Function): void;
    removeListener(_listener: Function): void;
    callListeners(..._args: any[]): void;
}
export declare class DummyItemDelegate {
    deleteItem(_id: string): void;
    deleteItems(_ids: string[]): Promise<void>;
    uninstallItem(_id: string): Promise<void>;
    openReviewPage(_id: string): Promise<void>;
    setItemEnabled(_id: string, _isEnabled: boolean): Promise<void>;
    setItemAllowedIncognito(_id: string, _isAllowedIncognito: boolean): void;
    setItemAllowedUserScripts(_id: string, _isAllowedUserScripts: boolean): void;
    setItemAllowedOnFileUrls(_id: string, _isAllowedOnFileUrls: boolean): void;
    setItemHostAccess(_id: string, _hostAccess: chrome.developerPrivate.HostAccess): void;
    setItemCollectsErrors(_id: string, _collectsErrors: boolean): void;
    inspectItemView(_id: string, _view: chrome.developerPrivate.ExtensionView): void;
    openUrl(_url: string): void;
    reloadItem(_id: string): Promise<void>;
    repairItem(_id: string): void;
    showItemOptionsPage(_extension: chrome.developerPrivate.ExtensionInfo): void;
    showInFolder(_id: string): void;
    getExtensionSize(_id: string): Promise<string>;
    addRuntimeHostPermission(_id: string, _host: string): Promise<void>;
    removeRuntimeHostPermission(_id: string, _host: string): Promise<void>;
    setItemSafetyCheckWarningAcknowledged(_id: string, _reason: chrome.developerPrivate.SafetyCheckWarningReason): void;
    setShowAccessRequestsInToolbar(_id: string, _showRequests: boolean): void;
    setItemPinnedToToolbar(_id: string, _pinnedToToolbar: boolean): void;
    uploadItemToAccount(_id: string): Promise<boolean>;
    setProfileExtensionsPinnedByDefault(_extensionsPinnedByDefault: boolean): void;
    recordUserAction(_metricName: string): void;
    getItemStateChangedTarget(): FakeChromeEvent;
    showSiteSettings(_id: string): void;
}
export interface ExtensionsItemElement {
    $: {
        a11yAssociation: HTMLElement;
        detailsButton: HTMLElement;
        enableToggle: CrToggleElement;
        name: HTMLElement;
        removeButton: HTMLElement;
    };
}
declare const ExtensionsItemElementBase: typeof CrLitElement & (new (...args: any[]) => import("./item_mixin.js").ItemMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsItemElement extends ExtensionsItemElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
        };
        safetyCheckShowing: {
            type: BooleanConstructor;
        };
        data: {
            type: ObjectConstructor;
        };
        firstInspectView_: {
            type: ObjectConstructor;
        };
        enableToggleTooltipPosition_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: ItemDelegate | null;
    accessor inDevMode: boolean;
    accessor safetyCheckShowing: boolean;
    accessor data: chrome.developerPrivate.ExtensionInfo;
    private accessor firstInspectView_;
    protected accessor enableToggleTooltipPosition_: TooltipPosition;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    /** @return The "Details" button. */
    getDetailsButton(): HTMLElement;
    /** @return The "Remove" button, if it exists. */
    getRemoveButton(): HTMLElement | null;
    /** @return The "Errors" button, if it exists. */
    getErrorsButton(): HTMLElement | null;
    protected getEnableToggleAriaLabel_(): string;
    protected getIdElementText_(): string;
    protected shouldShowErrorsButton_(): boolean;
    protected onRemoveClick_(): void;
    protected onOpenReviewPageClick_(): void;
    protected onEnableToggleChange_(): void;
    protected onErrorsClick_(): void;
    protected onDetailsClick_(): void;
    private computeFirstInspectView_;
    protected onInspectClick_(): void;
    protected onExtraInspectClick_(): void;
    protected onReloadClick_(): void;
    protected onUploadClick_(): Promise<void>;
    protected onRepairClick_(): void;
    protected isEnabled_(): boolean;
    protected isEnableToggleEnabled_(): boolean;
    /** @return Whether the reload button should be shown. */
    protected showReloadButton_(): boolean;
    /** @return Whether the repair button should be shown. */
    protected showRepairButton_(): boolean;
    /** @return Whether the enable toggle should be shown. */
    protected showEnableToggle_(): boolean;
    protected computeClasses_(): string;
    protected computeSourceIndicatorIcon_(): string;
    protected computeSourceIndicatorText_(): string;
    protected computeInspectViewsHidden_(): boolean;
    protected computeFirstInspectTitle_(): string;
    protected computeFirstInspectLabel_(): string;
    protected computeExtraViewsHidden_(): boolean;
    protected showAccountUploadButton_(): boolean;
    protected showDevReloadButton_(): boolean;
    protected computeExtraInspectLabel_(): string;
    /**
     * @return Whether the extension has severe warnings. Doesn't determine the
     *     warning's visibility.
     */
    private hasSevereWarnings_;
    /**
     * @return Whether the extension has an MV2 warning. Doesn't determine the
     *     warning's visibility.
     */
    private hasMv2DeprecationWarning_;
    /**
     * @return Whether the extension has an allowlist warning. Doesn't determine
     *     the warning's visibility.
     */
    private hasAllowlistWarning_;
    protected showDescription_(): boolean;
    protected showSevereWarnings(): boolean;
    protected showMv2DeprecationWarning_(): boolean;
    protected showAllowlistWarning_(): boolean;
    protected showOpenReviewPageLink_(): boolean;
    protected getDisabledByExtensionWarningText_(): string;
    protected isDisabledByAnotherExtension_(): boolean;
    protected showErrorsAsWarningsButtonLabel_(): boolean;
}
export type ItemElement = ExtensionsItemElement;
declare global {
    interface HTMLElementTagNameMap {
        'extensions-item': ExtensionsItemElement;
    }
}
export {};
