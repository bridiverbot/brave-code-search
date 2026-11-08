import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/strings.m.js';
import './site_permissions_edit_permissions_dialog.js';
import './site_permissions_edit_url_dialog.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SiteSettingsDelegate } from './site_settings_mixin.js';
export interface ExtensionsSitePermissionsListElement {
    $: {
        addSite: CrButtonElement;
        siteActionMenu: CrActionMenuElement;
    };
}
export declare class ExtensionsSitePermissionsListElement extends CrLitElement {
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
        header: {
            type: StringConstructor;
        };
        siteSet: {
            type: StringConstructor;
        };
        sites: {
            type: ArrayConstructor;
        };
        showEditSiteUrlDialog_: {
            type: BooleanConstructor;
        };
        showEditSitePermissionsDialog_: {
            type: BooleanConstructor;
        };
        /**
         * The site currently being edited if the user has opened the action menu
         * for a given site.
         */
        siteToEdit_: {
            type: StringConstructor;
        };
    };
    accessor delegate: SiteSettingsDelegate;
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    accessor header: string;
    accessor siteSet: chrome.developerPrivate.SiteSet;
    accessor sites: string[];
    protected accessor showEditSiteUrlDialog_: boolean;
    protected accessor showEditSitePermissionsDialog_: boolean;
    protected accessor siteToEdit_: string | null;
    private siteToEditAnchorElement_;
    protected hasSites_(): boolean;
    protected getFaviconUrl_(url: string): string;
    private focusOnAnchor_;
    protected onAddSiteClick_(): void;
    protected onEditSiteUrlDialogClose_(): void;
    protected onEditSitePermissionsDialogClose_(): void;
    protected onDotsClick_(e: Event): void;
    protected onEditSitePermissionsClick_(): void;
    protected onEditSiteUrlClick_(): void;
    protected onRemoveSiteClick_(): void;
    private closeActionMenu_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-permissions-list': ExtensionsSitePermissionsListElement;
    }
}
