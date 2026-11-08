import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './icons.html.js';
import './promotion_banner.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Application, Extension, ThreatProtectionInfo } from './management_browser_proxy.js';
interface BrowserReportingData {
    messageIds: string[];
    icon?: string;
}
declare const ManagementUiElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class ManagementUiElement extends ManagementUiElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * List of messages related to application reporting.
         */
        applications_: {
            type: ArrayConstructor;
        };
        /**
         * Title of subsection for application reporting.
         */
        applicationReportingSubtitle_: {
            type: StringConstructor;
        };
        /**
         * List of messages related to browser reporting.
         */
        browserReportingInfo_: {
            type: ArrayConstructor;
        };
        /**
         * List of messages related to profile reporting.
         */
        profileReportingInfo_: {
            type: ArrayConstructor;
        };
        /**
         * List of messages related to extension reporting.
         */
        extensions_: {
            type: ArrayConstructor;
        };
        /**
         * Title of subsection for extension reporting.
         */
        extensionReportingSubtitle_: {
            type: StringConstructor;
        };
        /**
         * List of messages related to managed websites reporting.
         */
        managedWebsites_: {
            type: ArrayConstructor;
        };
        managedWebsitesSubtitle_: {
            type: StringConstructor;
        };
        /**
         * Whether the promotion banner should be shown.
         */
        shouldShowPromotion_: {
            type: BooleanConstructor;
        };
        subtitle_: {
            type: StringConstructor;
        };
        managementNoticeHtml_: {
            type: StringConstructor;
        };
        managed_: {
            type: BooleanConstructor;
        };
        threatProtectionInfo_: {
            type: ObjectConstructor;
        };
    };
    protected accessor applications_: Application[] | null;
    protected accessor browserReportingInfo_: BrowserReportingData[] | null;
    protected accessor profileReportingInfo_: BrowserReportingData[] | null;
    protected accessor extensions_: Extension[] | null;
    protected accessor managedWebsites_: string[] | null;
    protected accessor managedWebsitesSubtitle_: string;
    protected accessor shouldShowPromotion_: boolean;
    protected accessor subtitle_: string;
    protected accessor managementNoticeHtml_: TrustedHTML;
    protected accessor managed_: boolean;
    protected accessor applicationReportingSubtitle_: string;
    protected accessor extensionReportingSubtitle_: string;
    protected accessor threatProtectionInfo_: ThreatProtectionInfo | null;
    private browserProxy_;
    /** @override */
    connectedCallback(): void;
    private initReportingInfo_;
    private onBrowserReportingInfoReceived_;
    private onProfileReportingInfoReceived_;
    private getExtensions_;
    private getManagedWebsites_;
    private getApplications_;
    private getThreatProtectionInfo_;
    /**
     * @return Whether there is threat protection info to show.
     */
    protected showThreatProtectionInfo_(): boolean;
    /**
     * @return Whether there are browser reporting info to show.
     */
    protected showBrowserReportingInfo_(): boolean;
    /**
     * @return Whether there are profile reporting info to show with new format.
     */
    protected showProfileReportingInfo_(): boolean;
    /**
     * @return Whether there are extension reporting info to show.
     */
    protected showExtensionReportingInfo_(): boolean;
    /**
     * @return Whether there are application reporting info to show.
     */
    protected showApplicationReportingInfo_(): boolean;
    /**
     * @return Whether there is managed websites info to show.
     */
    protected showManagedWebsitesInfo_(): boolean;
    /**
     * @return The associated icon.
     */
    private getIconForReportingType_;
    protected onPromotionDismissed_(): void;
    private updateManagedFields_;
}
declare global {
    interface HTMLElementTagNameMap {
        'management-ui': ManagementUiElement;
    }
}
export {};
