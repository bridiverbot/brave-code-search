import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsGeicPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsGeicPageElement extends SettingsGeicPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    getFocusConfig(): Map<string, string>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
    protected onGeicPageClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-geic-page': SettingsGeicPageElement;
    }
}
export {};
