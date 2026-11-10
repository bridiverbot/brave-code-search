/**
 * @fileoverview
 * 'storage-access-site-list-entry' is an element representing a group of
 * storage access permissions with the same origin and type of permission (e.g.
 * allowed, blocked).
 */
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './storage_access_static_site_list_entry.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { StorageAccessSiteException } from './site_settings_browser_proxy.js';
declare const StorageAccessSiteListEntryElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("./focus_row_mixin.js").FocusRowMixinInterface);
export declare class StorageAccessSiteListEntryElement extends StorageAccessSiteListEntryElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * A group of storage access site exceptions with the same `origin` and
         * `setting`.
         */
        model: {
            type: ObjectConstructor;
            observer: string;
        };
        /**
         * Signals if the expand button is opened or closed.
         */
        expanded_: {
            type: BooleanConstructor;
            observer: string;
            notify: boolean;
            value: boolean;
        };
        description_: StringConstructor;
        expandAriaLabel_: StringConstructor;
    };
    model: StorageAccessSiteException;
    private description_;
    private expandAriaLabel_;
    private expanded_;
    /**
     * Triggered when the top row reset button is clicked.
     * Resets all the permissions in `model.exceptions` i.e. all
     * permissions with the same origin.
     */
    private onResetAllButtonClick_;
    /**
     * A handler for the model change.
     */
    private onModelChanged_;
    /**
     * A handler for clicking on the top-row. This will scroll to the
     * element if needed.
     */
    private onExpandedChanged_;
    private getResetAllButtonAriaLabel_;
    private getResetButtonAriaLabel_;
    private computeExpandButtonAriaLabel_;
    /**
     * @returns the correct description according to the widget's state.
     */
    private computeDescription_;
    private shouldBeStatic_;
    private shouldBeCollapsible_;
    private getStaticSiteEntryForModel_;
    private getStaticSiteEntryForException_;
}
declare global {
    interface HTMLElementTagNameMap {
        'storage-access-site-list-entry': StorageAccessSiteListEntryElement;
    }
}
export {};
