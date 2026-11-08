/**
 * @fileoverview
 * 'site-list-entry' shows an Allowed and Blocked site for a given category.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ChooserType, CookiesExceptionType } from './constants.js';
import type { SiteException } from './site_settings_browser_proxy.js';
declare const SiteListEntryElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("./focus_row_mixin.js").FocusRowMixinInterface);
export declare class SiteListEntryElement extends SiteListEntryElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Some content types (like Location) do not allow the user to manually
         * edit the exception list from within Settings.
         */
        readOnlyList: {
            type: BooleanConstructor;
            value: boolean;
        };
        /** Site to display in the widget.*/
        model: {
            type: ObjectConstructor;
            observer: string;
        };
        /** Whether this entry is the only entry in the Allowed/Blocked section.*/
        singletonEntry: {
            type: BooleanConstructor;
        };
        /**
         * The header for the Allowed/Blocked section this entry is in. Used for
         * aria-label to fix cases where the screenreader hasn't already read it.
         */
        sectionHeader: {
            type: StringConstructor;
        };
        /**
         * If the site represented is part of a chooser exception, the chooser
         * type will be stored here to allow the permission to be manipulated.
         */
        chooserType: {
            type: StringConstructor;
            value: ChooserType;
        };
        /**
         * If the site represented is part of a chooser exception, the chooser
         * object will be stored here to allow the permission to be manipulated.
         */
        chooserObject: {
            type: ObjectConstructor;
            value: null;
        };
        showPolicyPrefIndicator_: {
            type: BooleanConstructor;
            computed: string;
        };
        allowNavigateToSiteDetail_: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * Type of cookies exceptions based on the use of wildcard in the
         * patterns. See `CookiesExceptionType`.
         */
        cookiesExceptionType: StringConstructor;
    };
    private readOnlyList;
    model: SiteException;
    private singletonEntry;
    private sectionHeader;
    private chooserType;
    private chooserObject;
    private showPolicyPrefIndicator_;
    private allowNavigateToSiteDetail_;
    cookiesExceptionType: CookiesExceptionType;
    private onShowTooltip_;
    private onShowIncognitoTooltip_;
    private isIsolatedWebApp_;
    /**
     * Returns true if this site exception can be edited by the user. Note that
     * this is not the same as readonly; an exception can be removable but not
     * editable.
     */
    private isUserEditable_;
    private shouldShowResetButton_;
    private shouldShowActionMenu_;
    /**
     * A handler for selecting a site (by clicking on the origin).
     */
    private onOriginClick_;
    /**
     * Returns the appropriate display name to show for the exception.
     * This can, for example, be the website that is affected itself,
     * or the website whose third parties are also affected.
     */
    private computeDisplayName_;
    /**
     * Returns an appropriate aria-label for this entry. The reset (trash can)
     * button has a different aria-label, see the HTML.
     */
    private computeAriaLabel_;
    /**
     * Returns an appropriate aria-label for the remove button. This aria-label
     * clearly indicates a site name and section header. It should help the
     * screenreader user understand that this button will remove the site from the
     * list. There are two lists, one for allowed sites and one for blocked sites.
     */
    private computeRemoveButtonAriaLabel_;
    /**
     * Returns an appropriate aria-label for the view button. This aria-label
     * clearly indicates a site name and section header. It should help the
     * screenreader user understand that this button will open a subpage for the
     * site from the list. There are two lists, one for allowed sites and one for
     * blocked sites.
     */
    private computeViewButtonAriaLabel_;
    /**
     * Returns the appropriate origin that a favicon will be fetched for.
     */
    private computeFaviconOrigin_;
    /**
     * Returns the appropriate site description to display. This can, for example,
     * be blank, an 'embedded on <site>' string, or a third-party exception
     * description string.
     */
    private computeSiteDescription_;
    private computeShowPolicyPrefIndicator_;
    private onResetButtonClick_;
    private onShowActionMenuClick_;
    private onModelChanged_;
    private getActionMenuButtonLabel_;
    setSectionHeaderForTest(sectionHeader: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-list-entry': SiteListEntryElement;
    }
}
export {};
