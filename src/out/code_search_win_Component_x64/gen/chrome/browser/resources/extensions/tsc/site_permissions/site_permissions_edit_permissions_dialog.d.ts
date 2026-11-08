import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '/strings.m.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SiteSettingsDelegate } from './site_settings_mixin.js';
interface ExtensionSiteAccessInfo {
    id: string;
    name: string;
    iconUrl: string;
    siteAccess: chrome.developerPrivate.HostAccess;
    addedByPolicy: boolean;
    canRequestAllSites: boolean;
}
export interface SitePermissionsEditPermissionsDialogElement {
    $: {
        dialog: CrDialogElement;
        includesSubdomains: HTMLElement;
        site: HTMLElement;
        submit: CrButtonElement;
    };
}
declare const SitePermissionsEditPermissionsDialogElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class SitePermissionsEditPermissionsDialogElement extends SitePermissionsEditPermissionsDialogElementBase {
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
         * The current siteSet for `site`, as stored in the backend. Specifies
         * whether `site` is a user specified permitted or restricted site, or is
         * a pattern specified by an extension's host permissions..
         */
        originalSiteSet: {
            type: StringConstructor;
        };
        /**
         * The url of the site whose permissions are currently being edited.
         */
        site: {
            type: StringConstructor;
        };
        /**
         * The temporary siteSet for `site` as displayed in the dialog. Will be
         * saved to the backend when the dialog is submitted.
         */
        siteSet_: {
            type: StringConstructor;
        };
        extensionSiteAccessData_: {
            type: ArrayConstructor;
        };
        showPermittedOption_: {
            type: BooleanConstructor;
        };
    };
    accessor delegate: SiteSettingsDelegate;
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor originalSiteSet: chrome.developerPrivate.SiteSet;
    accessor site: string;
    protected accessor siteSet_: chrome.developerPrivate.SiteSet;
    private extensionsIdToInfo_;
    protected accessor extensionSiteAccessData_: ExtensionSiteAccessInfo[];
    protected accessor showPermittedOption_: boolean;
    private unsavedExtensionsIdToHostAccess_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private onExtensionsUpdated_;
    protected onSiteSetSelectedChanged_(e: CustomEvent<{
        value: chrome.developerPrivate.SiteSet;
    }>): void;
    private isSiteHostOnly_;
    private updateExtensionSiteAccessData_;
    protected onCancelClick_(): void;
    protected onSubmitClick_(): Promise<void>;
    protected getSiteWithoutSubdomainSpecifier_(): string;
    protected getPermittedSiteLabel_(): string;
    protected getRestrictedSiteLabel_(): string;
    protected matchesSubdomains_(): boolean;
    protected showExtensionSiteAccessData_(): boolean;
    protected getDialogBodyContainerClass_(): string;
    protected isSelected_(extensionId: string, originalSiteAccess: chrome.developerPrivate.HostAccess, option: chrome.developerPrivate.HostAccess): boolean;
    protected onHostAccessChange_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-permissions-edit-permissions-dialog': SitePermissionsEditPermissionsDialogElement;
    }
}
export {};
