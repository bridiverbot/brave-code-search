/**
 * @fileoverview
 * 'chooser-exception-list' shows a list of chooser exceptions for a given
 * chooser type.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '../settings_shared.css.js';
import '../i18n_setup.js';
import './chooser_exception_list_entry.js';
import type { CrDialogElement } from 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ChooserType } from './constants.js';
import type { ChooserException } from './site_settings_browser_proxy.js';
export interface ChooserExceptionListElement {
    $: {
        confirmResetSettings: CrDialogElement;
        tooltip: CrTooltipElement;
    };
}
declare const ChooserExceptionListElementBase: typeof PolymerElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("./list_property_update_mixin.js").ListPropertyUpdateMixinInterface) & (new (...args: any[]) => import("../tooltip_mixin.js").TooltipMixinInterface);
export declare class ChooserExceptionListElement extends ChooserExceptionListElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Array of chooser exceptions to display in the widget.
         */
        chooserExceptions: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * The string ID of the chooser type that this element is displaying data
         * for.
         * See site_settings/constants.js for possible values.
         */
        chooserType: {
            observer: string;
            type: StringConstructor;
            value: ChooserType;
        };
        emptyListMessage_: {
            type: StringConstructor;
            value: string;
        };
        hasIncognito_: BooleanConstructor;
        resetPermissionsMessage_: {
            type: StringConstructor;
            value: string;
        };
        tooltipText_: StringConstructor;
    };
    chooserExceptions: ChooserException[];
    chooserType: ChooserType;
    private emptyListMessage_;
    private hasIncognito_;
    private resetPermissionsMessage_;
    private tooltipText_;
    connectedCallback(): void;
    /**
     * Called when a chooser exception changes permission and updates the element
     * if |category| is equal to the settings category of this element.
     * @param category The content settings type that represents this permission
     *     category.
     * @param chooserType The content settings type that represents the chooser
     *     data for this permission.
     */
    private objectWithinChooserTypeChanged_;
    /**
     * Called for each chooser-exception-list when incognito is enabled or
     * disabled. Only called on change (opening N incognito windows only fires one
     * message). Another message is sent when the *last* incognito window closes.
     */
    private onIncognitoStatusChanged_;
    /**
     * Configures the visibility of the widget and shows the list.
     */
    private chooserTypeChanged_;
    /**
     * @return true if there are any chooser exceptions for this chooser type.
     */
    private hasExceptions_;
    /**
     * Need to use a common tooltip since the tooltip in the entry is cut off from
     * the iron-list.
     */
    private onShowTooltip_;
    /**
     * Populate the chooser exception list for display.
     */
    private populateList_;
    /**
     * Process the chooser exception list returned from the native layer.
     */
    private processExceptions_;
    /**
     * Confirms the resetting of all content settings for an origin.
     */
    private onConfirmClearSettings_;
    private onCloseDialog_;
    /**
     * Resets all permissions for the current origin.
     */
    private onResetSettings_;
}
declare global {
    interface HTMLElementTagNameMap {
        'chooser-exception-list': ChooserExceptionListElement;
    }
}
export {};
