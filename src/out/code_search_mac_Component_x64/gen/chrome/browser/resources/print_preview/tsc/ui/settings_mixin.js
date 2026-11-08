// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { getInstance } from '../data/model.js';
export const SettingsMixin = (superClass) => {
    class SettingsMixin extends superClass {
        observers_ = [];
        model_ = null;
        connectedCallback() {
            super.connectedCallback();
            // Cache this reference, so that the same one can be used in
            // disconnectedCallback(), othehrwise if `model_` has already been removed
            // from the DOM, getInstance() will throw an error.
            this.model_ = getInstance();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            assert(this.model_);
            if (this.model_.isConnected) {
                // Only remove observers if the PrintPreviewModelElement original
                // singleton instance is still connected to the DOM. Otherwise all
                // observers have already been remomved in PrintPreviewModelElement's
                // disconnectedCallback.
                for (const id of this.observers_) {
                    const removed = this.model_.observable.removeObserver(id);
                    assert(removed);
                }
            }
            this.model_ = null;
            this.observers_ = [];
        }
        addSettingObserver(path, callback) {
            const id = getInstance().observable.addObserver(path, callback);
            this.observers_.push(id);
        }
        getSetting(settingName) {
            return getInstance().getSetting(settingName);
        }
        getSettingValue(settingName) {
            return getInstance().getSettingValue(settingName);
        }
        setSetting(settingName, value, noSticky) {
            getInstance().setSetting(settingName, value, noSticky);
        }
        setSettingValid(settingName, valid) {
            getInstance().setSettingValid(settingName, valid);
        }
    }
    return SettingsMixin;
};
