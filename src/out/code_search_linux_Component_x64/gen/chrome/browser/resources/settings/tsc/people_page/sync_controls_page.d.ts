import './sync_controls.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { SyncStatus } from '/shared/settings/people_page/sync_browser_proxy.js';
declare const SettingsSyncControlsPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsSyncControlsPageElement extends SettingsSyncControlsPageElementBase {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        syncStatus_: {
            type: ObjectConstructor;
        };
    };
    protected accessor syncStatus_: SyncStatus | null;
    connectedCallback(): void;
    private onSyncStatusChanged_;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-sync-controls-page': SettingsSyncControlsPageElement;
    }
}
export {};
