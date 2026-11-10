/**
 * @fileoverview
 * 'privacy-guide-msbb-fragment' is the fragment in a privacy guide card
 * that contains the MSBB setting with a two-column description.
 */
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../../controls/settings_toggle_button.js';
import '../../icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class PrivacyGuideMsbbFragmentElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsBrowserProxy_;
    private startStateMsbbOn_;
    connectedCallback(): void;
    focus(): void;
    private onViewEnterStart_;
    private onViewExitFinish_;
    protected onMsbbToggleChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'privacy-guide-msbb-fragment': PrivacyGuideMsbbFragmentElement;
    }
}
