/**
 * @fileoverview
 * 'privacy-guide-cookies-fragment' is the fragment in a privacy
 * guide card that contains the cookie settings and their descriptions.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/collapse_radio_button.js';
import '../../controls/settings_radio_group.js';
import '../../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PrivacyGuideCookiesFragmentElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsBrowserProxy_;
    private startStateBlock3PIncognito_;
    connectedCallback(): void;
    focus(): void;
    private onViewEnterStart_;
    private onViewExitFinish_;
    protected onCookies3pIncognitoClick_(): void;
    protected onCookies3pClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-cookies-fragment': PrivacyGuideCookiesFragmentElement;
    }
}
