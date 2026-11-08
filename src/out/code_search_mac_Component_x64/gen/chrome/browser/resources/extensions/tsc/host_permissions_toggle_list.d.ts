import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './restricted_sites_dialog.js';
import './toggle_row.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExtensionsRestrictedSitesDialogElement } from './restricted_sites_dialog.js';
import type { ExtensionsToggleRowElement } from './toggle_row.js';
export interface ExtensionsHostPermissionsToggleListElement {
    $: {
        allHostsToggle: ExtensionsToggleRowElement;
        linkIconButton: HTMLAnchorElement;
    };
}
declare const ExtensionsHostPermissionsToggleListElementBase: typeof CrLitElement & (new (...args: any[]) => import("./site_permissions/site_settings_mixin.js").SiteSettingsMixinInterface);
export declare class ExtensionsHostPermissionsToggleListElement extends ExtensionsHostPermissionsToggleListElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The underlying permissions data.
         */
        permissions: {
            type: ObjectConstructor;
        };
        itemId: {
            type: StringConstructor;
        };
        /**
         * This is set as the host the user is trying to toggle on/grant host
         * permissions for, if the host matches one or more user specified
         * restricted sites.
         */
        selectedHost_: {
            type: StringConstructor;
        };
        matchingRestrictedSites_: {
            type: ArrayConstructor;
        };
        showMatchingRestrictedSitesDialog_: {
            type: BooleanConstructor;
        };
    };
    accessor permissions: chrome.developerPrivate.RuntimeHostPermissions;
    accessor itemId: string;
    protected accessor matchingRestrictedSites_: string[];
    protected accessor showMatchingRestrictedSitesDialog_: boolean;
    private accessor selectedHost_;
    getRestrictedSitesDialog(): ExtensionsRestrictedSitesDialogElement | null;
    /**
     * @return Whether the item is allowed to execute on all of its requested
     *     sites.
     */
    protected allowedOnAllHosts_(): boolean;
    /**
     * @return A lexicographically-sorted list of the hosts associated with this
     *     item.
     */
    protected getSortedHosts_(): chrome.developerPrivate.SiteControl[];
    protected onAllHostsToggleChange_(e: CustomEvent<boolean>): void;
    protected onHostAccessChange_(e: CustomEvent<boolean>): void;
    protected isItemChecked_(item: chrome.developerPrivate.SiteControl): boolean;
    protected getAllHostsToggleLabelClass_(): string;
    protected onLearnMoreClick_(): void;
    protected getFaviconUrl_(url: string): string;
    private unselectHost_;
    protected onMatchingRestrictedSitesDialogClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'extensions-host-permissions-toggle-list': ExtensionsHostPermissionsToggleListElement;
    }
}
export {};
