import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_page_selector/cr_page_selector.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import './activity_log_stream.js';
import './activity_log_history.js';
import '/strings.m.js';
import { NONE_SELECTED } from 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import type { CrTabsElement } from 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ActivityLogDelegate } from './activity_log_history.js';
/**
 * Subpages/views for the activity log. HISTORY shows extension activities
 * fetched from the activity log database with some fields such as args
 * omitted. STREAM displays extension activities in a more verbose format in
 * real time. NONE is used when user is away from the page.
 */
declare const enum ActivityLogSubpage {
    HISTORY = 0,
    STREAM = 1
}
type MaybeActivityLogSubpage = ActivityLogSubpage | typeof NONE_SELECTED;
/**
 * A struct used as a placeholder for chrome.developerPrivate.ExtensionInfo
 * for this component if the extensionId from the URL does not correspond to
 * installed extension.
 */
export interface ActivityLogExtensionPlaceholder {
    id: string;
    isPlaceholder: boolean;
}
export interface ExtensionsActivityLogElement {
    $: {
        closeButton: HTMLElement;
        tabs: CrTabsElement;
    };
}
declare const ExtensionsActivityLogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The underlying ExtensionInfo for the details being displayed.
         */
        extensionInfo: {
            type: ObjectConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        selectedSubpage_: {
            type: NumberConstructor;
        };
        tabNames_: {
            type: ArrayConstructor;
        };
    };
    accessor extensionInfo: chrome.developerPrivate.ExtensionInfo | ActivityLogExtensionPlaceholder;
    accessor delegate: ActivityLogDelegate;
    protected accessor selectedSubpage_: MaybeActivityLogSubpage;
    protected accessor tabNames_: string[];
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected isPlaceholder_(): boolean;
    protected getExtensionIconUrl_(): string;
    /**
     * Focuses the back button when page is loaded and set the activie view to
     * be HISTORY when we navigate to the page.
     */
    private onViewEnterStart_;
    /**
     * Set |selectedSubpage_| to NONE_SELECTED to remove the active view from the
     * DOM.
     */
    private onViewExitFinish_;
    protected getActivityLogHeading_(): string;
    protected isHistoryTabSelected_(): boolean;
    protected isStreamTabSelected_(): boolean;
    protected onTabsSelectedChanged_(e: CustomEvent<{
        value: ActivityLogSubpage;
    }>): void;
    protected onSelectedSubpageChanged_(newTab: MaybeActivityLogSubpage, oldTab: MaybeActivityLogSubpage): void;
    protected onCloseButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-activity-log': ExtensionsActivityLogElement;
    }
}
export {};
