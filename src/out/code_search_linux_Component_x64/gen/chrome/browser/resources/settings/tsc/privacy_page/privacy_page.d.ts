/**
 * @fileoverview
 * 'settings-privacy-page' is the settings page containing privacy and
 * security settings.
 */
import './personalization_options.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import '../icons.html.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_section.js';
import './privacy_guide/privacy_guide_dialog.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import type { CrToastElement } from 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
export interface SettingsPrivacyPageElement {
    $: {
        clearBrowsingData: CrLinkRowElement;
        deleteBrowsingDataToast: CrToastElement;
        siteSettingsLinkRow: CrLinkRowElement;
        securityLinkRow: CrLinkRowElement;
    };
}
declare const SettingsPrivacyPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface) & (new (...args: any[]) => import("./privacy_guide/privacy_guide_availability_mixin_lit.js").PrivacyGuideAvailabilityMixinLitInterface);
export type PrivacyPageElement = SettingsPrivacyPageElement;
export declare class SettingsPrivacyPageElement extends SettingsPrivacyPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showClearBrowsingDataDialog_: {
            type: BooleanConstructor;
        };
        showPrivacyGuideDialog_: {
            type: BooleanConstructor;
        };
        dbdDeletionConfirmationToastLabel_: {
            type: StringConstructor;
        };
        showUniversalOptOutSettings_: {
            type: BooleanConstructor;
        };
        cookieControlsModePref_: {
            type: ObjectConstructor;
        };
    };
    protected accessor showClearBrowsingDataDialog_: boolean;
    protected accessor showPrivacyGuideDialog_: boolean;
    protected accessor dbdDeletionConfirmationToastLabel_: string;
    private accessor showUniversalOptOutSettings_;
    private accessor cookieControlsModePref_;
    private shouldShowDbdDeletionConfirmationToast_;
    private metricsBrowserProxy_;
    connectedCallback(): void;
    currentRouteChanged(newRoute: Route, oldRoute?: Route): void;
    protected onClearBrowsingDataClick_(): void;
    protected onCookiesClick_(): void;
    protected onCbdDialogClose_(): void;
    protected onPrivacyGuideDialogClose_(): void;
    protected onSiteSettingsLinkRowClick_(): void;
    protected onSecurityPageClick_(): void;
    protected onPrivacyGuideClick_(): void;
    private interactedWithPage_;
    protected getThirdPartyCookiesLabel_(): string;
    protected getThirdPartyCookiesSublabel_(): string;
    protected onBrowsingDataDeleted_(e: CustomEvent<{
        deletionConfirmationText: string;
    }>): void;
    getFocusConfig(): Map<any, any>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-privacy-page': SettingsPrivacyPageElement;
    }
}
export {};
