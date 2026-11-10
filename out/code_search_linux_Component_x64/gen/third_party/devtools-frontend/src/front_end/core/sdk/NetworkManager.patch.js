/* Copyright (c) 2024 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */
export function PatchNetworkDispatcher(NetworkDispatcher) {
    return class extends NetworkDispatcher {
        #requestsAdblockInfo;
        adblockInfoForId(id) {
            return this.#requestsAdblockInfo?.get(id) || null;
        }
        requestAdblockInfoReceived(params) {
            if (!this.#requestsAdblockInfo) {
                this.#requestsAdblockInfo = new Map();
            }
            this.#requestsAdblockInfo.set(params.requestId, params.info);
            const networkRequest = this.requestForId(params.requestId);
            if (networkRequest) {
                ;
                this.updateNetworkRequest(networkRequest);
            }
        }
        clearRequests() {
            if (this.#requestsAdblockInfo) {
                for (const [requestId, _] of this.#requestsAdblockInfo) {
                    const request = this.requestForId(requestId);
                    if (request?.finished) {
                        this.#requestsAdblockInfo.delete(requestId);
                    }
                }
            }
            super.clearRequests();
        }
    };
}
//# sourceMappingURL=NetworkManager.patch.js.map