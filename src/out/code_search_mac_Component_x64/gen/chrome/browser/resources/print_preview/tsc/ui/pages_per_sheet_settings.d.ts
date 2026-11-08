import './settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const PrintPreviewPagesPerSheetSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewPagesPerSheetSettingsElement extends PrintPreviewPagesPerSheetSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
    };
    accessor disabled: boolean;
    connectedCallback(): void;
    /**
     * @param newValue The new value of the pages per sheet setting.
     */
    private onPagesPerSheetSettingChange_;
    onProcessSelectChange(value: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-pages-per-sheet-settings': PrintPreviewPagesPerSheetSettingsElement;
    }
}
export type PagesPerSheetSettingsElement = PrintPreviewPagesPerSheetSettingsElement;
export {};
