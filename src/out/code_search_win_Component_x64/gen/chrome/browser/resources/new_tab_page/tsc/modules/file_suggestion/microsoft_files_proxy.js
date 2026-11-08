// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { MicrosoftFilesPageHandler } from '../../microsoft_files.mojom-webui.js';
export class MicrosoftFilesProxyImpl {
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    static getInstance() {
        return instance ||
            (instance = new MicrosoftFilesProxyImpl(MicrosoftFilesPageHandler.getRemote()));
    }
    static setInstance(newInstance) {
        instance = newInstance;
    }
}
let instance = null;
