/**
 * @fileoverview
 * 'settings-reset-page' is the settings page containing reset
 * settings.
 */
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_page/settings_section.js';
import './reset_profile_dialog.js';
import type { CrLazyRenderLitElement } from 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Route } from '../router.js';
import type { SettingsPlugin } from '../settings_main/settings_plugin.js';
import type { SettingsResetProfileDialogElement } from './reset_profile_dialog.js';
export interface SettingsResetPageElement {
    $: {
        resetProfileDialog: CrLazyRenderLitElement<SettingsResetProfileDialogElement>;
        resetProfile: HTMLElement;
    };
}
declare const SettingsResetPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../router.js").RouteObserverMixinInterface);
export declare class SettingsResetPageElement extends SettingsResetPageElementBase implements SettingsPlugin {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    /**
     * RouteObserverMixin
     */
    currentRouteChanged(route: Route): void;
    protected onShowResetProfileDialogClick_(): void;
    protected onResetProfileDialogClose_(): void;
    searchContents(query: string): Promise<import("../search_settings.js").SearchResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-reset-page': SettingsResetPageElement;
    }
}
export {};
