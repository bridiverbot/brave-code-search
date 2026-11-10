/**
 * @fileoverview
 * 'settings-section' shows a paper material themed section with a header
 * which shows its page title.
 *
 * Example:
 *
 *    <settings-section page-title="[[pageTitle]]">
 *      <!-- Insert your section controls here -->
 *    </settings-section>
 */
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
export declare class SettingsSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * Title for the section header. Initialize so we can use the
         * getTitleHiddenStatus_ method for accessibility.
         */
        pageTitle: {
            type: StringConstructor;
        };
        /**
         * When this attribute is enabled, a send feedback button will be shown
         * that emits a 'send-feedback' event.
         */
        showSendFeedbackButton: {
            type: BooleanConstructor;
        };
    };
    accessor pageTitle: string;
    accessor showSendFeedbackButton: boolean;
    /**
     * Get the value to which to set the aria-hidden attribute of the section
     * heading.
     */
    protected getTitleHiddenStatus_(): string | typeof nothing;
    focus(): void;
    protected onSendFeedbackClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-section': SettingsSectionElement;
    }
}
