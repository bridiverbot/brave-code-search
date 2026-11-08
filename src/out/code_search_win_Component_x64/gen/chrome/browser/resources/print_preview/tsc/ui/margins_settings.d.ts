import './settings_section.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { State } from '../data/state.js';
declare const PrintPreviewMarginsSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./select_mixin.js").SelectMixinInterface) & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewMarginsSettingsElement extends PrintPreviewMarginsSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        disabled: {
            type: BooleanConstructor;
        };
        state: {
            type: NumberConstructor;
        };
        marginsDisabled_: {
            type: BooleanConstructor;
        };
        pagesPerSheet_: {
            type: NumberConstructor;
        };
    };
    accessor disabled: boolean;
    accessor state: State;
    protected accessor marginsDisabled_: boolean;
    private accessor pagesPerSheet_;
    private loaded_;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onMediaSizeOrLayoutChange_;
    onProcessSelectChange(value: string): void;
}
export type MarginsSettingsElement = PrintPreviewMarginsSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-margins-settings': PrintPreviewMarginsSettingsElement;
    }
}
export {};
