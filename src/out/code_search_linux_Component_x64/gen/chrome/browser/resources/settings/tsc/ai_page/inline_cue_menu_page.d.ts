import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../icons.html.js';
import '../site_settings/add_site_dialog.js';
import '../site_favicon.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_subpage.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import type { RawSiteException } from '../site_settings/site_settings_browser_proxy.js';
export interface SettingsInlineCueMenuPageElement {
    $: {
        mainToggle: SettingsToggleButtonElement;
    };
}
declare const SettingsInlineCueMenuPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsInlineCueMenuPageElement extends SettingsInlineCueMenuPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        sites_: {
            type: ArrayConstructor;
        };
        showAddSiteDialog_: {
            type: BooleanConstructor;
        };
    };
    protected accessor sites_: RawSiteException[];
    protected accessor showAddSiteDialog_: boolean;
    private browserProxy_;
    connectedCallback(): void;
    private onCategoryChanged_;
    private updateSites_;
    protected hasSites_(): boolean;
    protected onAddSiteClick_(): void;
    protected onAddSiteDialogClose_(): void;
    protected onDeleteSiteClick_(e: Event): void;
    private updateToggleValue_;
    protected onMainToggleSettingsBooleanControlChange_(): void;
    protected getPreviewText_(): TrustedHTML;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-inline-cue-menu-page': SettingsInlineCueMenuPageElement;
    }
}
export {};
