import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '../brave_account_row.js';
import '../people_page/people_page.js';
import '../settings_page/settings_section.js';
import '../default_browser_page/default_browser_page.js';
import '../on_startup_page/on_startup_page.js';
import { SettingsViewMixinInterface } from '../settings_page/settings_view_mixin.js';
declare const BraveSettingsGettingStarted_base: typeof PolymerElement & (new (...args: any[]) => SettingsViewMixinInterface);
export declare class BraveSettingsGettingStarted extends BraveSettingsGettingStarted_base {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        accountState_: {
            type: ObjectConstructor;
            value: null;
        };
    };
    private accountState_;
    private accountBrowserProxy_;
    private accountStateListenerId_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private getBraveAccountDetailsTitle_;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
export {};
