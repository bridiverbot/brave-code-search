import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import './item.js';
import './mv2_deprecation_panel.js';
import './review_panel.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
type Filter = (info: chrome.developerPrivate.ExtensionInfo) => boolean;
declare const ExtensionsItemListElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsItemListElement extends ExtensionsItemListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        apps: {
            type: ArrayConstructor;
        };
        extensions: {
            type: ArrayConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        inDevMode: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        isMv2DeprecationNoticeDismissed: {
            type: BooleanConstructor;
            notify: boolean;
            reflect: boolean;
        };
        filter: {
            type: StringConstructor;
        };
        extensionsPinnedByDefault: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        computedFilter_: {
            type: ObjectConstructor;
        };
        maxColumns_: {
            type: NumberConstructor;
        };
        filteredExtensions_: {
            type: ArrayConstructor;
        };
        filteredApps_: {
            type: ArrayConstructor;
        };
        /**
         * List of potentially unsafe extensions that should be visible in the
         * review panel.
         */
        unsafeExtensions_: {
            type: ArrayConstructor;
        };
        /**
         * List of extensions that are affected by the mv2 deprecation and should
         * be visible in the mv2 deprecation panel.
         */
        mv2DeprecatedExtensions_: {
            type: ArrayConstructor;
        };
        shownAppsCount_: {
            type: NumberConstructor;
        };
        shownExtensionsCount_: {
            type: NumberConstructor;
        };
        /**
         * Indicates whether the review panel is shown.
         */
        showSafetyCheckReviewPanel_: {
            type: BooleanConstructor;
        };
        /**
         * Indicates if the review panel has ever been shown.
         */
        reviewPanelShown_: {
            type: BooleanConstructor;
            state: boolean;
        };
        showExtensionsPinnedByDefault_: {
            type: BooleanConstructor;
            state: boolean;
        };
    };
    accessor apps: chrome.developerPrivate.ExtensionInfo[];
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor delegate: ItemDelegate;
    accessor inDevMode: boolean;
    accessor isMv2DeprecationNoticeDismissed: boolean;
    accessor extensionsPinnedByDefault: boolean;
    accessor filter: string;
    protected accessor showExtensionsPinnedByDefault_: boolean;
    protected accessor filteredExtensions_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor filteredApps_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor computedFilter_: Filter | null;
    protected accessor maxColumns_: number;
    protected accessor unsafeExtensions_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor mv2DeprecatedExtensions_: chrome.developerPrivate.ExtensionInfo[];
    protected accessor shownAppsCount_: number;
    protected accessor shownExtensionsCount_: number;
    protected accessor showSafetyCheckReviewPanel_: boolean;
    private accessor reviewPanelShown_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    getDetailsButton(id: string): HTMLElement | null;
    getRemoveButton(id: string): HTMLElement | null;
    getErrorsButton(id: string): HTMLElement | null;
    /**
     * Focus the remove button for the item matching `id`. If the remove button is
     * not visible, focus the details button instead.
     * return: If an item's button has been focused, see comment below.
     */
    focusItemButton(id: string): boolean;
    /**
     * Computes the filter function to be used for determining which items
     * should be shown. A |null| value indicates that everything should be
     * shown.
     */
    private computeFilter_;
    /**
     * Computes the extensions that are affected by the manifest v2 deprecation
     * and should be visible in the MV2 deprecation panel.
     */
    private computeMv2DeprecatedExtensions_;
    /**
     * Computes the extensions that are potentially unsafe and should be visible
     * in the review panel.
     */
    private computeUnsafeExtensions_;
    /**
     * Returns whether the review deprecation panel should be visible.
     */
    private computeShowSafetyCheckReviewPanel_;
    protected hasSafetyCheckTriggeringExtension_(): boolean;
    /**
     * Returns whether the manifest v2 deprecation panel should be visible.
     */
    protected shouldShowMv2DeprecationPanel_(): boolean;
    protected shouldShowEmptyItemsMessage_(): boolean;
    protected shouldShowEmptySearchMessage_(): boolean;
    protected onNoExtensionsClick_(e: Event): void;
    private announceSearchResults_;
    protected onExtensionsPinnedByDefaultChange_(e: CustomEvent<boolean>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-item-list': ExtensionsItemListElement;
    }
}
export {};
