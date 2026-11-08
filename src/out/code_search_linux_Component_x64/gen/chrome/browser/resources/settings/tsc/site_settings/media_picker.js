// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'media-picker' handles showing the dropdown allowing users to select the
 * default camera/microphone.
 */
import { WebUiListenerMixinLit } from 'chrome://resources/cr_elements/web_ui_listener_mixin_lit.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './media_picker.css.js';
import { getHtml } from './media_picker.html.js';
import { SiteSettingsMixinLit } from './site_settings_mixin_lit.js';
const MediaPickerElementBase = SiteSettingsMixinLit(WebUiListenerMixinLit(CrLitElement));
export class MediaPickerElement extends MediaPickerElementBase {
    static get is() {
        return 'media-picker';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * The type of media picker, either 'camera' or 'mic'.
             */
            type: { type: String },
            /** Label for a11y purposes. */
            label: { type: String },
            /**
             * The devices available to pick from.
             */
            devices: { type: Array },
            selectedDevice_: { type: String },
        };
    }
    #type_accessor_storage = '';
    get type() { return this.#type_accessor_storage; }
    set type(value) { this.#type_accessor_storage = value; }
    #label_accessor_storage = '';
    get label() { return this.#label_accessor_storage; }
    set label(value) { this.#label_accessor_storage = value; }
    #devices_accessor_storage = [];
    get devices() { return this.#devices_accessor_storage; }
    set devices(value) { this.#devices_accessor_storage = value; }
    #selectedDevice__accessor_storage = '';
    get selectedDevice_() { return this.#selectedDevice__accessor_storage; }
    set selectedDevice_(value) { this.#selectedDevice__accessor_storage = value; }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('updateDevicesMenu', (type, devices, selectedDevice) => this.updateDevicesMenu_(type, devices, selectedDevice));
        this.browserProxy.initializeCaptureDevices(this.type);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const changedPrivateProperties = changedProperties;
        if (changedProperties.has('devices') ||
            changedPrivateProperties.has('selectedDevice_')) {
            this.$.mediaPicker.value = this.selectedDevice_;
        }
    }
    /**
     * Updates the microphone/camera devices menu with the given entries.
     * @param type The device type.
     * @param devices List of available devices.
     * @param selectedDevice The unique id of the current default device.
     */
    updateDevicesMenu_(type, devices, selectedDevice) {
        if (type !== this.type) {
            return;
        }
        this.$.picker.hidden = devices.length === 0;
        if (devices.length > 0) {
            this.devices = devices;
            this.selectedDevice_ = selectedDevice;
        }
    }
    /**
     * A handler for when an item is selected in the media picker.
     */
    onChange_() {
        this.selectedDevice_ = this.$.mediaPicker.value;
        this.browserProxy.setPreferredCaptureDevice(this.type, this.$.mediaPicker.value);
    }
}
customElements.define(MediaPickerElement.is, MediaPickerElement);
