import 'chrome://resources/cr_elements/md_select_lit.css.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const PrintPreviewColorSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewColorSettingsElement extends PrintPreviewColorSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        managed_: {
            type: BooleanConstructor;
        };
    };
    accessor disabled: boolean;
    private accessor managed_;
    connectedCallback(): void;
    private onColorSettingChange_;
    /**
     * @return Whether drop-down should be disabled.
     */
    protected computeDisabled_(): boolean;
    /** @param value The new select value. */
    onProcessSelectChange(value: string): void;
}
export type ColorSettingsElement = PrintPreviewColorSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-color-settings': PrintPreviewColorSettingsElement;
    }
}
export {};
