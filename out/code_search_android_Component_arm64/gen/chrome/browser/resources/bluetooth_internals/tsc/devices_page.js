// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Javascript for DevicesPage and DevicesView, served from
 *     chrome://bluetooth-internals/.
 */
import './device_table.js';
import { assertNotReachedCase } from 'chrome://resources/js/assert.js';
import { Page } from './page.js';
/**
 * Enum of scan status for the devices page.
 */
export var ScanStatus;
(function (ScanStatus) {
    ScanStatus[ScanStatus["OFF"] = 0] = "OFF";
    ScanStatus[ScanStatus["STARTING"] = 1] = "STARTING";
    ScanStatus[ScanStatus["ON"] = 2] = "ON";
    ScanStatus[ScanStatus["STOPPING"] = 3] = "STOPPING";
})(ScanStatus || (ScanStatus = {}));
/**
 * Page that contains a header and a DevicesView.
 */
export class DevicesPage extends Page {
    deviceTable;
    scanBtn_;
    constructor() {
        super('devices', 'Devices', 'devices');
        this.deviceTable = document.createElement('device-table');
        this.pageDiv.appendChild(this.deviceTable);
        this.scanBtn_ = this.pageDiv.querySelector('#scan-btn');
        this.scanBtn_.addEventListener('click', _event => {
            this.pageDiv.dispatchEvent(new CustomEvent('scanpressed'));
        });
    }
    /**
     * Sets the device collection for the page's device table.
     */
    setDevices(devices) {
        this.deviceTable.setDevices(devices);
    }
    /**
     * Updates the inspect status of the given |deviceInfo| in the device table.
     */
    setInspecting(deviceInfo, isInspecting) {
        this.deviceTable.setInspecting(deviceInfo, isInspecting);
    }
    /**
     * If Bluetooth is currently powered off do not show start discovery button.
     */
    updatedScanButtonVisibility(powered) {
        this.scanBtn_.hidden = !powered;
    }
    setScanStatus(status) {
        switch (status) {
            case ScanStatus.OFF:
                this.scanBtn_.disabled = false;
                this.scanBtn_.textContent = 'Start Scan';
                break;
            case ScanStatus.STARTING:
                this.scanBtn_.disabled = true;
                this.scanBtn_.textContent = 'Starting...';
                break;
            case ScanStatus.ON:
                this.scanBtn_.disabled = false;
                this.scanBtn_.textContent = 'Stop Scan';
                break;
            case ScanStatus.STOPPING:
                this.scanBtn_.disabled = true;
                this.scanBtn_.textContent = 'Stopping...';
                break;
            default:
                assertNotReachedCase(status);
        }
    }
}
