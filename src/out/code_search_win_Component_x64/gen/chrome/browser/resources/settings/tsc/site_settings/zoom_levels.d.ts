/**
 * @fileoverview
 * 'zoom-levels' is the element for showing the sites that are zoomed in
 * or out.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '../settings_page/settings_subpage.js';
import '../site_favicon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ZoomLevelEntry } from './site_settings_browser_proxy.js';
export interface ZoomLevelsElement {
    $: {
        empty: HTMLElement;
        list: HTMLElement;
    };
}
declare const ZoomLevelsElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("./site_settings_mixin_lit.js").SiteSettingsMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class ZoomLevelsElement extends ZoomLevelsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Array of sites that are zoomed in or out.
         */
        sites_: {
            type: ArrayConstructor;
        };
    };
    protected accessor sites_: ZoomLevelEntry[];
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * A handler for when zoom levels change.
     * @param sites The up to date list of sites and their zoom levels.
     */
    private onZoomLevelsChanged_;
    protected shouldShowNoSites_(): boolean;
    /**
     * A handler for when a zoom level for a site is deleted.
     */
    protected onRemoveZoomLevelClick_(e: MouseEvent): void;
    focusBackButton(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'zoom-levels': ZoomLevelsElement;
    }
}
export {};
