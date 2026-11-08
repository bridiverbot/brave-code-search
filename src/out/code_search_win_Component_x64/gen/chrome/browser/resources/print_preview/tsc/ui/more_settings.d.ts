import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '/strings.m.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
interface PrintPreviewMoreSettingsElement {
    $: {
        label: HTMLElement;
    };
}
declare class PrintPreviewMoreSettingsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        settingsExpandedByUser: {
            type: BooleanConstructor;
            notify: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor settingsExpandedByUser: boolean;
    accessor disabled: boolean;
    private metrics_;
    /**
     * Toggles the expand button within the element being listened to.
     */
    protected onExpandButtonClick_(e: Event): void;
    protected onExpandedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
}
export type MoreSettingsElement = PrintPreviewMoreSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-more-settings': PrintPreviewMoreSettingsElement;
    }
}
export {};
