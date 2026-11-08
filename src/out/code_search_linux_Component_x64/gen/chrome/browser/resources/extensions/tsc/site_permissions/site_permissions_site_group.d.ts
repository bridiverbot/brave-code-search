import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './site_permissions_edit_permissions_dialog.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SiteSettingsDelegate } from './site_settings_mixin.js';
export interface SitePermissionsSiteGroupElement {
    $: {
        etldOrSite: HTMLElement;
        etldOrSiteIncludesSubdomains: HTMLElement;
        etldOrSiteSubtext: HTMLElement;
    };
}
export declare class SitePermissionsSiteGroupElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
        delegate: {
            type: ObjectConstructor;
        };
        extensions: {
            type: ArrayConstructor;
        };
        listIndex: {
            type: NumberConstructor;
        };
        expanded_: {
            type: BooleanConstructor;
        };
        showEditSitePermissionsDialog_: {
            type: BooleanConstructor;
        };
        siteToEdit_: {
            type: ObjectConstructor;
        };
    };
    accessor data: chrome.developerPrivate.SiteGroup;
    accessor delegate: SiteSettingsDelegate;
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor listIndex: number;
    protected accessor expanded_: boolean;
    protected accessor showEditSitePermissionsDialog_: boolean;
    protected accessor siteToEdit_: chrome.developerPrivate.SiteInfo | null;
    protected getEtldOrSiteFaviconUrl_(): string;
    protected getFaviconUrl_(url: string): string;
    protected isExpandable_(): boolean;
    protected getClassForIndex_(): string;
    protected getDisplayUrl_(): string;
    protected getEtldOrSiteSubText_(): string;
    protected getSiteWithoutSubdomainSpecifier_(site: string): string;
    protected etldOrFirstSiteMatchesSubdomains_(): boolean;
    protected matchesSubdomains_(site: string): boolean;
    protected getSiteSubtext_(siteInfo: chrome.developerPrivate.SiteInfo): string;
    private getExtensionCountText_;
    protected onEditSiteClick_(): void;
    protected onEditSiteInListClick_(e: Event): void;
    protected onEditSitePermissionsDialogClose_(): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-permissions-site-group': SitePermissionsSiteGroupElement;
    }
}
