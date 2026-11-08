import './settings_section.js';
import './settings_select.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { MediaSizeCapability } from '../data/cdd.js';
declare const PrintPreviewMediaSizeSettingsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./settings_mixin.js").SettingsMixinInterface);
export declare class PrintPreviewMediaSizeSettingsElement extends PrintPreviewMediaSizeSettingsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        capability: {
            type: ObjectConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
    };
    accessor capability: MediaSizeCapability | null;
    accessor disabled: boolean;
    private lastSelectedValue_;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onMediaSizeSettingChange_;
}
export type MediaSizeSettingsElement = PrintPreviewMediaSizeSettingsElement;
declare global {
    interface HTMLElementTagNameMap {
        'print-preview-media-size-settings': PrintPreviewMediaSizeSettingsElement;
    }
}
export {};
