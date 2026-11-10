import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
import type { Mv2DeprecationDelegate } from './mv2_deprecation_delegate.js';
export interface ExtensionsMv2DeprecationPanelElement {
    $: {
        actionMenu: CrActionMenuElement;
    };
}
declare const ExtensionsMv2DeprecationPanelElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsMv2DeprecationPanelElement extends ExtensionsMv2DeprecationPanelElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        extensions: {
            type: ArrayConstructor;
        };
        /**
         * Whether the panel title should be shown.
         */
        showTitle: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        /**
         * The string for the panel's header.
         */
        headerString_: {
            type: StringConstructor;
        };
        /**
         * The string for the panel's subtitle.
         */
        subtitleString_: {
            type: StringConstructor;
        };
        /**
         * Extension which has its action menu opened.
         */
        extensionWithActionMenuOpened_: {
            type: ObjectConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor delegate: (ItemDelegate & Mv2DeprecationDelegate) | undefined;
    accessor showTitle: boolean;
    protected accessor headerString_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private accessor subtitleString_;
    private accessor extensionWithActionMenuOpened_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Updates properties after extensions change.
     */
    private onExtensionsChanged_;
    /**
     * Returns whether the extension's remove button should be displayed.
     */
    protected showExtensionRemoveButton_(extension: chrome.developerPrivate.ExtensionInfo): boolean;
    /**
     * Returns whether the extension's action menu button should be displayed.
     */
    protected showActionMenu_(extension: chrome.developerPrivate.ExtensionInfo): boolean;
    /**
     * Returns whether the find alternative button in the extension's action menu
     * should be displayed.
     */
    protected showExtensionFindAlternativeAction_(): boolean;
    /**
     * Returns the accessible label for the remove button corresponding to
     * `extensionName`.
     */
    protected getRemoveButtonLabelFor_(extensionName: string): string;
    /**
     * Returns the accessible label for the action menu button corresponding to
     * `extensionName`.
     */
    protected getActionMenuButtonLabelFor_(extensionName: string): string;
    /**
     * Returns the HTML representation of the subtitle string. We need the HTML
     * representation instead of the string since the string holds a link.
     */
    protected getSubtitleString_(): TrustedHTML;
    /**
     * Triggers the MV2 deprecation notice dismissal when the dismiss button is
     * clicked.
     */
    protected onDismissButtonClick_(): void;
    /**
     * Triggers an extension removal when the remove button is clicked for an
     * extension.
     */
    protected onRemoveButtonClick_(event: Event): void;
    /**
     * Opens the action menu for a specific extension when the action menu button
     * is clicked.
     */
    protected onExtensionActionMenuClick_(event: Event): void;
    /**
     * Opens a URL in the Web Store with extension recommendations for the
     * extension whose find alternative action is clicked.
     */
    protected onFindAlternativeExtensionActionClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-mv2-deprecation-panel': ExtensionsMv2DeprecationPanelElement;
    }
}
export {};
