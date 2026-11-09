import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_collapse/cr_collapse.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrExpandButtonElement } from 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from './item.js';
export interface ExtensionsReviewPanelElement {
    $: {
        makeExceptionMenu: CrActionMenuElement;
        reviewPanelContainer: HTMLElement;
        expandButton: CrExpandButtonElement;
        safetyHubTitleContainer: HTMLElement;
        headingText: HTMLElement;
        secondaryText: HTMLElement;
        removeAllButton: CrButtonElement;
    };
}
declare const ExtensionsReviewPanelElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsReviewPanelElement extends ExtensionsReviewPanelElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        delegate: {
            type: ObjectConstructor;
        };
        /**
         * List of potentially unsafe extensions. If this list is empty, all the
         * unsafe extensions were reviewed and the completion info should be
         * visible.
         */
        extensions: {
            type: ArrayConstructor;
        };
        /**
         * The string for the primary header label.
         */
        headerString_: {
            type: StringConstructor;
        };
        /**
         * The string for secondary text under the header string.
         */
        subtitleString_: {
            type: StringConstructor;
        };
        /**
         * The text of the safety check completion state.
         */
        completionMessage_: {
            type: StringConstructor;
        };
        /**
         * Indicates whether to show the potentially unsafe extensions or not.
         */
        shouldShowUnsafeExtensions_: {
            type: BooleanConstructor;
        };
        /**
         * Indicates whether to show completion info after user has finished the
         * review process.
         */
        shouldShowCompletionInfo_: {
            type: BooleanConstructor;
        };
        /**
         * Indicates if the list of unsafe extensions is expanded or collapsed.
         */
        unsafeExtensionsReviewListExpanded_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: ItemDelegate | undefined;
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    protected accessor headerString_: string;
    protected accessor subtitleString_: string;
    protected accessor unsafeExtensionsReviewListExpanded_: boolean;
    protected accessor completionMessage_: string;
    protected accessor shouldShowCompletionInfo_: boolean;
    protected accessor shouldShowUnsafeExtensions_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    /**
     * Tracks if the last action that led to the number of extensions
     * under review going to 0 was taken in the review panel. If it was
     * the completion state is shown. If not the review panel is removed.
     * This prevents actions like toggling dev mode or removing a
     * extension using the item card's Remove button from triggering the
     * completion message.
     */
    private numberOfExtensionsChangedByLastReviewPanelAction_;
    private completionMetricLogged_;
    private lastClickedExtensionId_;
    private lastClickedExtensionTriggerReason_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onExtensionsChanged_;
    /**
     * Determines whether or not to show the completion info when there are no
     * unsafe extensions left.
     */
    private computeShouldShowCompletionInfo_;
    private computeShouldShowUnsafeExtensions_;
    protected shouldShowExtensionsSafetyHub_(): boolean;
    protected shouldShowSafetyHubRemoveAllButton_(): boolean;
    protected shouldShowThreeDotDetails_(): boolean;
    protected onDetailsClick_(): void;
    protected onUnsafeExtensionsReviewListExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    /**
     * Opens the extension action menu.
     */
    protected onMakeExceptionMenuClick_(e: Event): void;
    /**
     * Acknowledges the extension safety check warning.
     */
    protected onKeepExtensionClick_(): void;
    protected getRemoveButtonA11yLabel_(extensionName: string): string;
    protected getOptionMenuA11yLabel_(extensionName: string): string;
    protected onRemoveExtensionClick_(e: Event): Promise<void>;
    protected onRemoveAllClick_(event: Event): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-review-panel': ExtensionsReviewPanelElement;
    }
}
export {};
