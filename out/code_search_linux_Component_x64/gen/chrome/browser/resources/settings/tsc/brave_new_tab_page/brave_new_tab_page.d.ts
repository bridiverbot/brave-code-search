import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { WebUiListenerMixinInterface } from '/shared/settings/web_ui_listener_mixin.js';
import { BraveNewTabBrowserProxy } from './brave_new_tab_browser_proxy.js';
import '/shared/settings/md_select.css.js';
/**
 * 'settings-brave-new-tab-page' is the settings page containing
 * brave's new tab features.
 */
declare const SettingsBraveNewTabPageElementBase: {
    new (): PolymerElement & WebUiListenerMixinInterface;
};
export declare class SettingsBraveNewTabPageElement extends SettingsBraveNewTabPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        newTabShowOptions_: ArrayConstructor;
        showNewTabDashboardSettings_: BooleanConstructor;
    };
    private newTabShowOptions_;
    private showNewTabDashboardSettings_;
    browserProxy_: BraveNewTabBrowserProxy;
    ready(): void;
    openNewTabPage_(): void;
}
export {};
