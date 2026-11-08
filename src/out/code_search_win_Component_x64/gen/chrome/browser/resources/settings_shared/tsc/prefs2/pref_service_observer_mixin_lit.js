// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PrefService } from './pref_service.js';
export const PrefServiceObserverMixinLit = (superClass) => {
    class PrefServiceObserverMixinLit extends superClass {
        prefServiceObserverIds_ = [];
        disconnectedCallback() {
            super.disconnectedCallback();
            for (const id of this.prefServiceObserverIds_) {
                PrefService.getInstance().removeObserver(id);
            }
            this.prefServiceObserverIds_ = [];
        }
        addPrefObserver(prefKey, callback) {
            const id = PrefService.getInstance().addObserver(prefKey, callback);
            this.prefServiceObserverIds_.push(id);
            return id;
        }
        removePrefObserver(id) {
            PrefService.getInstance().removeObserver(id);
            const index = this.prefServiceObserverIds_.indexOf(id);
            if (index !== -1) {
                this.prefServiceObserverIds_.splice(index, 1);
            }
        }
        mirrorPref(prefKey, propName) {
            this.addPrefObserver(prefKey, pref => {
                this[propName] = pref;
            });
        }
        mirrorPrefs(prefMap) {
            for (const [prefKey, propName] of Object.entries(prefMap)) {
                this.mirrorPref(prefKey, propName);
            }
        }
    }
    return PrefServiceObserverMixinLit;
};
