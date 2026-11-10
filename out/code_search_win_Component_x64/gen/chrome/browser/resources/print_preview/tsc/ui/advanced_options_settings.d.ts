import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './advanced_settings_dialog.js';
import './settings_section.js';
import type { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Destination } from '../data/destination.js';
interface PrintPreviewAdvancedOptionsSettingsElement {
    $: {
        button: CrButtonElement;
    };
}
declare class PrintPreviewAdvancedOptionsSettingsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        destination: {
            type: ObjectConstructor;
        };
        showAdvancedDialog_: {
            type: BooleanConstructor;
        };
    };
    accessor disabled: boolean;
    accessor destination: Destination | null;
    protected accessor showAdvancedDialog_: boolean;
    protected onButtonClick_(): void;
    protected onDialogClose_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-advanced-options-settings': PrintPreviewAdvancedOptionsSettingsElement;
    }
}
export type AdvancedOptionsSettingsElement = PrintPreviewAdvancedOptionsSettingsElement;
export {};
