import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ContentSettingsTypes } from '../site_settings/constants.js';
declare const SiteSettingsEthereumPageBase: typeof PolymerElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin.js").SettingsViewMixinInterface);
export declare class SiteSettingsEthereumPage extends SiteSettingsEthereumPageBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        contentSettingsTypesEnum_: {
            type: ObjectConstructor;
            value: typeof ContentSettingsTypes;
        };
    };
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-settings-ethereum-page': SiteSettingsEthereumPage;
    }
}
export {};
