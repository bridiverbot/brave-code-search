import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../icons.html.js';
import '../settings_page/settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface SettingsGlicPageElement {
    $: {
        glicLinkRow: HTMLElement;
        learnMoreLabel: HTMLAnchorElement;
    };
}
declare const SettingsGlicPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export declare class SettingsGlicPageElement extends SettingsGlicPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        startIcon_: {
            type: StringConstructor;
        };
    };
    private metricsBrowserProxy_;
    protected accessor startIcon_: string;
    protected onGlicPageClick_(): void;
    protected onSettingsPageLearnMoreClick_(event: Event): void;
    getFocusConfig(): Map<string, string>;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-glic-page': SettingsGlicPageElement;
    }
}
export {};
