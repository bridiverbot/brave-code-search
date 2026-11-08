import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './site_permissions_site_group.js';
import type { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ItemDelegate } from '../item.js';
import type { SiteSettingsDelegate } from './site_settings_mixin.js';
export interface ExtensionsSitePermissionsBySiteElement {
    $: {
        closeButton: CrIconButtonElement;
    };
}
export declare class ExtensionsSitePermissionsBySiteElement extends CrLitElement {
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
        siteGroups_: {
            type: ArrayConstructor;
        };
    };
    accessor delegate: (ItemDelegate & SiteSettingsDelegate) | undefined;
    accessor extensions: chrome.developerPrivate.ExtensionInfo[];
    protected accessor siteGroups_: chrome.developerPrivate.SiteGroup[];
    firstUpdated(): void;
    private refreshUserAndExtensionSites_;
    protected onCloseButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-site-permissions-by-site': ExtensionsSitePermissionsBySiteElement;
    }
}
