/**
 * @fileoverview
 * 'settings-safety-hub-card' is used by the top cards in Safety Hub settings
 * page.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { CrIconElement } from 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { CardInfo } from './safety_hub_browser_proxy.js';
export interface SettingsSafetyHubCardElement {
    $: {
        header: HTMLElement;
        icon: CrIconElement;
        subheader: HTMLElement;
    };
}
export declare class SettingsSafetyHubCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        data: {
            type: ObjectConstructor;
        };
    };
    accessor data: CardInfo;
    protected getStatusIcon_(): string;
    protected getColorClass_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-safety-hub-card': SettingsSafetyHubCardElement;
    }
}
