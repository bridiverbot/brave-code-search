import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '/strings.m.js';
import './site_permissions_list.js';
import type { CrLinkRowElement } from 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface ExtensionsSitePermissionsElement {
    $: {
        allSitesLink: CrLinkRowElement;
    };
}
declare const ExtensionsSitePermissionsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface);
export declare class ExtensionsSitePermissionsElement extends ExtensionsSitePermissionsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        extensions: {
            type: ArrayConstructor;
        };
        showPermittedSites_: {
            type: BooleanConstructor;
        };
    };
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    protected accessor showPermittedSites_: boolean;
    protected onAllSitesLinkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-site-permissions': ExtensionsSitePermissionsElement;
    }
}
export {};
