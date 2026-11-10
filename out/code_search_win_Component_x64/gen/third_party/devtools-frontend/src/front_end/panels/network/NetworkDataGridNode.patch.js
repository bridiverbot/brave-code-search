/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
import * as SDK from '../../core/sdk/sdk.js';
export function PatchNetworkRequestNode(NetworkRequestNode) {
    return class extends NetworkRequestNode {
        updateBackgroundColor() {
            const networkManager = SDK.NetworkManager.NetworkManager.forRequest(this.request());
            if (networkManager && networkManager.dispatcher) {
                const info = networkManager.dispatcher.adblockInfoForId(this.request().requestId());
                const element = this.existingElement();
                if (info && element) {
                    if ('blocked' in info && info.blocked) {
                        element.style.color = 'var(--sys-color-error)';
                    }
                    else if ('didMatchException' in info && info.didMatchException) {
                        element.style.color = 'var(--ref-palette-green60)';
                    }
                }
            }
            super.updateBackgroundColor();
        }
    };
}
//# sourceMappingURL=NetworkDataGridNode.patch.js.map