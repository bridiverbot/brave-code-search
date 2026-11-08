/**
 * @fileoverview
 * 'site-details-permission-device-entry' shows a single device for a given
 * chooser exception.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '/shared/settings/controls/cr_policy_pref_indicator.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import type { ChooserException } from './site_settings_browser_proxy.js';
export interface SiteDetailsPermissionDeviceEntryElement {
    $: {
        resetSite: HTMLElement;
    };
}
export declare class SiteDetailsPermissionDeviceEntryElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * The chooser exception to display in the widget.
         */
        exception: ObjectConstructor;
    };
    exception: ChooserException;
    /**
     * Get the SiteException that is enforced from |this.exception.sites| if any.
     */
    private getPolicyPref_;
    private shouldShowPolicyPrefIndicator_;
    private onResetButtonClick_;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-details-permission-device-entry': SiteDetailsPermissionDeviceEntryElement;
    }
}
