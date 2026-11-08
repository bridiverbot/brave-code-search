import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { MediaPickerEntry } from './site_settings_browser_proxy.js';
export interface MediaPickerElement {
    $: {
        mediaPicker: HTMLSelectElement;
        picker: HTMLElement;
    };
}
declare const MediaPickerElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("./site_settings_mixin_lit.js").SiteSettingsMixinLitInterface);
export declare class MediaPickerElement extends MediaPickerElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * The type of media picker, either 'camera' or 'mic'.
         */
        type: {
            type: StringConstructor;
        };
        /** Label for a11y purposes. */
        label: {
            type: StringConstructor;
        };
        /**
         * The devices available to pick from.
         */
        devices: {
            type: ArrayConstructor;
        };
        selectedDevice_: {
            type: StringConstructor;
        };
    };
    accessor type: string;
    accessor label: string;
    accessor devices: MediaPickerEntry[];
    protected accessor selectedDevice_: string;
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Updates the microphone/camera devices menu with the given entries.
     * @param type The device type.
     * @param devices List of available devices.
     * @param selectedDevice The unique id of the current default device.
     */
    private updateDevicesMenu_;
    /**
     * A handler for when an item is selected in the media picker.
     */
    protected onChange_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'media-picker': MediaPickerElement;
    }
}
export {};
