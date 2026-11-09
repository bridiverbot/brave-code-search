// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import { getRequiredElement } from 'chrome://resources/js/util.js';
/**
 * CSS classes for different statuses.
 */
var StatusClass;
(function (StatusClass) {
    StatusClass["GOOD"] = "good";
    StatusClass["BAD"] = "bad";
    StatusClass["MEDIUM"] = "medium";
    StatusClass["INFO"] = "info";
})(StatusClass || (StatusClass = {}));
/**
 * Adds a row to the sandbox status table.
 * @param name The name of the status item.
 * @param value The status of the item.
 * @param cssClass A CSS class to apply to the row.
 * @return The newly added TR.
 */
function addStatusRow(name, value, cssClass) {
    const row = document.createElement('tr');
    const nameCol = row.appendChild(document.createElement('td'));
    const valueCol = row.appendChild(document.createElement('td'));
    nameCol.textContent = name;
    valueCol.textContent = value;
    if (cssClass != null) {
        nameCol.classList.add(cssClass);
        valueCol.classList.add(cssClass);
    }
    getRequiredElement('sandbox-status').appendChild(row);
    return row;
}
/**
 * Reports the overall sandbox status evaluation message.
 */
function setEvaluation(result) {
    const message = result ? 'You are adequately sandboxed.' :
        'You are NOT adequately sandboxed.';
    getRequiredElement('evaluation').innerText = message;
}
// 
/**
 * Main page handler for Android.
 */
function androidHandler() {
    chrome.getAndroidSandboxStatus(status => {
        let isIsolated = false;
        let isTsync = false;
        let isChromeSeccomp = false;
        addStatusRow('PID', status.pid, StatusClass.INFO);
        addStatusRow('UID', status.uid, StatusClass.INFO);
        isIsolated = status.secontext.indexOf(':isolated_app:') !== -1;
        addStatusRow('SELinux Context', status.secontext, isIsolated ? StatusClass.GOOD : StatusClass.BAD);
        const procStatus = status.procStatus.split('\n');
        for (const line of procStatus) {
            if (line.startsWith('Seccomp')) {
                let value = line.split(':')[1].trim();
                let cssClass = StatusClass.BAD;
                if (value === '2') {
                    value = 'Yes - TSYNC (' + line + ')';
                    cssClass = StatusClass.GOOD;
                    isTsync = true;
                }
                else if (value === '1') {
                    value = 'Yes (' + line + ')';
                }
                else {
                    value = line;
                }
                addStatusRow('Seccomp-BPF Enabled (Kernel)', value, cssClass);
                break;
            }
        }
        let seccompStatus = 'Unknown';
        switch (status.seccompStatus) {
            case 0:
                seccompStatus = 'Not Supported';
                break;
            case 1:
                seccompStatus = 'Run-time Detection Failed';
                break;
            case 2:
                seccompStatus = 'Disabled by Field Trial';
                break;
            case 3:
                seccompStatus = 'Enabled by Field Trial (not started)';
                break;
            case 4:
                seccompStatus = 'Sandbox Started';
                isChromeSeccomp = true;
                break;
            default:
                break;
        }
        addStatusRow('Seccomp-BPF Enabled (Chrome)', seccompStatus, status.seccompStatus === 4 ? StatusClass.GOOD : StatusClass.BAD);
        addStatusRow('Android Build ID', status.androidBuildId, StatusClass.INFO);
        setEvaluation(isIsolated && isTsync && isChromeSeccomp);
    });
}
// 
// 
document.addEventListener('DOMContentLoaded', () => {
    // 
    androidHandler();
    // 
    // 
});
