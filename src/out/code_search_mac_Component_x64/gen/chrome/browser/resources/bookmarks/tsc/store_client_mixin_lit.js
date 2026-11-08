// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Store } from './store.js';
export const StoreClientMixinLit = (superClass) => {
    class StoreClientMixinLit extends superClass {
        connectedCallback() {
            super.connectedCallback();
            Store.getInstance().addObserver(this);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            Store.getInstance().removeObserver(this);
        }
        dispatch(action) {
            Store.getInstance().dispatch(action);
        }
        dispatchAsync(action) {
            Store.getInstance().dispatchAsync(action);
        }
        updateFromStore() {
            if (Store.getInstance().isInitialized()) {
                this.onStateChanged(this.getState());
            }
        }
        onStateChanged(_state) {
            // Should be overridden by clients who want to modify private state
            // in response to state changes.
        }
        getState() {
            return Store.getInstance().data;
        }
        getStore() {
            return Store.getInstance();
        }
    }
    return StoreClientMixinLit;
};
