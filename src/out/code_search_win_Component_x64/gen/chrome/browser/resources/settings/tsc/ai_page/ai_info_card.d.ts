/**
 * @fileoverview
 * 'settings-ai-info-card' is the top info card in AI settings page.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../settings_page/settings_section.js';
import '../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class SettingsAiInfoCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    protected isManaged_(): boolean;
    protected getIcon3_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-ai-info-card': SettingsAiInfoCardElement;
    }
}
