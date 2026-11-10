/**
 * @fileoverview
 * 'protocol-handlers' is the polymer element for showing the
 * protocol handlers category under Site Settings.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../controls/collapse_radio_button.js';
import '../controls/settings_toggle_button.js';
import '../privacy_icons.html.js';
import '../settings_page/settings_subpage.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface HandlerEntry {
    host: string;
    is_default: boolean;
    protocol: string;
    protocol_display_name: string;
    spec: string;
}
export interface ProtocolEntry {
    handlers: HandlerEntry[];
    protocol: string;
    protocol_display_name: string;
}
export interface AppHandlerEntry {
    host: string;
    protocol: string;
    protocol_display_name: string;
    spec: string;
    app_id: string;
    app_name?: string;
}
export interface AppProtocolEntry {
    handlers: AppHandlerEntry[];
    protocol: string;
    protocol_display_name: string;
}
export interface ProtocolHandlersElement {
    $: {
        defaultButton: HTMLButtonElement;
    };
}
declare const ProtocolHandlersElementBase: typeof PolymerElement & (new (...args: any[]) => import("./site_settings_mixin.js").SiteSettingsMixinInterface) & (new (...args: any[]) => import("/shared/settings/web_ui_listener_mixin.js").WebUiListenerMixinInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class ProtocolHandlersElement extends ProtocolHandlersElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        /**
         * Array of protocols and their handlers.
         */
        protocols: ArrayConstructor;
        /**
         * Array of allowed app protocols and their handlers.
         */
        appAllowedProtocols: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * Array of disallowed app protocols and their handlers.
         */
        appDisallowedProtocols: {
            type: ArrayConstructor;
            value(): never[];
        };
        /**
         * Used to determine if the apps title should be shown.
         */
        showAppsProtocolHandlersTitle_: {
            type: BooleanConstructor;
            value: boolean;
        };
        /**
         * The targeted object for menu operations.
         */
        actionMenuModel_: ObjectConstructor;
        toggleOffLabel: StringConstructor;
        toggleOnLabel: StringConstructor;
        /**
         * Array of ignored (blocked) protocols.
         */
        ignoredProtocols: ArrayConstructor;
        handlersEnabled_: {
            type: BooleanConstructor;
            value: boolean;
        };
    };
    protocols: ProtocolEntry[];
    appAllowedProtocols: AppProtocolEntry[];
    appDisallowedProtocols: AppProtocolEntry[];
    private showAppsProtocolHandlersTitle_;
    private actionMenuModel_;
    toggleOffLabel: string;
    toggleOnLabel: string;
    ignoredProtocols: HandlerEntry[];
    private handlersEnabled_;
    ready(): void;
    /**
     * Obtains the description for the main toggle.
     * @return The description to use.
     */
    private computeHandlersDescription_;
    /**
     * Updates the main toggle to set it enabled/disabled.
     * @param enabled The state to set.
     */
    private setHandlersEnabled_;
    /**
     * Updates the list of protocol handlers.
     * @param protocols The new protocol handler list.
     */
    private setProtocolHandlers_;
    /**
     * Updates the list of ignored protocol handlers.
     * @param ignoredProtocols The new (ignored) protocol handler list.
     */
    private setIgnoredProtocolHandlers_;
    /**
     * Updates the list of allowed app protocol handlers.
     * @param appAllowedProtocols The new allowed app protocol handler list.
     */
    private setAppAllowedProtocolHandlers_;
    /**
     * Updates the list of disallowed app protocol handlers.
     * @param appDisallowedProtocols The new disallowed app protocol
     *     handler list.
     */
    private setAppDisallowedProtocolHandlers_;
    /**
     * Determines if the app header should be shown.
     */
    private updateShowAppsProtocolHandlersTitle_;
    /**
     * Closes action menu and resets action menu model
     */
    private closeActionMenu_;
    /**
     * A handler when the radio group selection changes.
     */
    private onRadioGroupChange_;
    /**
     * The handler for when "Set Default" is selected in the action menu.
     */
    private onDefaultClick_;
    /**
     * The handler for when "Remove" is selected in the action menu.
     */
    private onRemoveClick_;
    /**
     * Handler for removing web app protocol handlers that were allowed.
     */
    private onRemoveAppAllowedHandlerButtonClick_;
    /**
     * Handler for removing web app protocol handlers that were disallowed.
     */
    private onRemoveAppDisallowedHandlerButtonClick_;
    /**
     * Handler for removing handlers that were blocked
     */
    private onRemoveIgnored_;
    /**
     * A handler to show the action menu next to the clicked menu button.
     */
    private showMenu_;
    private getNameCssClass_;
    private getNameText_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'protocol-handlers': ProtocolHandlersElement;
    }
}
export {};
