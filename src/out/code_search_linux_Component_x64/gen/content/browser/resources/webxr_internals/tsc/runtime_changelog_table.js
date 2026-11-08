// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { getTemplate } from './runtime_changelog_table.html.js';
import * as TimeUtil from './time_util.js';
import * as XRRuntimeUtil from './xr_runtime_util.js';
import * as XRSessionUtil from './xr_session_util.js';
const ADDED_RUNTIME_STATE = 'Added';
const REMOVED_RUNTIME_STATE = 'Removed';
export class RuntimeChangelogTableElement extends CustomElement {
    static get template() {
        return getTemplate();
    }
    addRuntimeAddedRecord(runtimeInfo) {
        const { deviceId, supportedFeatures, isArBlendModeSupported } = runtimeInfo;
        const cellValues = [
            XRRuntimeUtil.deviceIdToString(deviceId),
            ADDED_RUNTIME_STATE,
            TimeUtil.getCurrentDateTime(),
            supportedFeatures.map(XRSessionUtil.sessionFeatureToString).join(', '),
            isArBlendModeSupported.toString(),
        ];
        this.addRow(cellValues);
    }
    addRuntimeRemovedRecord(deviceId) {
        const cellValues = [
            XRRuntimeUtil.deviceIdToString(deviceId),
            REMOVED_RUNTIME_STATE,
            TimeUtil.getCurrentDateTime(),
        ];
        this.addRow(cellValues);
    }
    addRow(cellValues) {
        const table = this.getRequiredElement('#runtimes-changelog-table');
        const newRow = table.insertRow();
        cellValues.forEach((value) => {
            const cell = newRow.insertCell();
            cell.textContent = value;
        });
    }
}
customElements.define('runtime-changelog-table', RuntimeChangelogTableElement);
