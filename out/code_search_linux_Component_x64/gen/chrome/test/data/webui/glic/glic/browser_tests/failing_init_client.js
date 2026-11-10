// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createGlicHostRegistryOnLoad } from '../api_boot.js';
class FailingInitWebClient {
    async initialize(_browser) {
        throw new Error('fail_init');
    }
}
const client = new FailingInitWebClient();
createGlicHostRegistryOnLoad().then((registry) => {
    registry.registerWebClient(client);
});
