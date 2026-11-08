/**
 * @fileoverview
 * 'settings-ax-annotations-section' is a section holding the toggle for main
 * node accessibility annotations. It appears on the accessibility page
 * (chrome://settings/accessibility) on Windows, macOS, and Linux.
 */
import '../controls/settings_toggle_button.js';
import { ScreenAiInstallStatus } from '/shared/settings/a11y_page/ax_annotations_browser_proxy.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const SettingsAxAnnotationsSectionBaseElement: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class SettingsAxAnnotationsSectionElement extends SettingsAxAnnotationsSectionBaseElement {
    static get is(): 'settings-ax-annotations-section';
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * `screenAIProgress_` stores the downloading progress in percentage of
         * the ScreenAI library, which ranges from 0.0 to 100.0.
         */
        screenAIProgress_: {
            type: NumberConstructor;
        };
        /**
         * `screenAIStatus_` stores the ScreenAI library install state.
         */
        screenAIStatus_: {
            type: NumberConstructor;
        };
    };
    private browserProxy_;
    protected accessor screenAIProgress_: number;
    protected accessor screenAIStatus_: ScreenAiInstallStatus;
    connectedCallback(): void;
    protected getMainNodeAnnotationsToggleSublabel_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ax-annotations-section': SettingsAxAnnotationsSectionElement;
    }
}
export {};
