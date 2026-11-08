// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CustomHelpBubbleHandlerFactory, CustomHelpBubbleHandlerRemote } from './custom_help_bubble.mojom-webui.js';
export class CustomHelpBubbleProxyImpl {
    handler_ = new CustomHelpBubbleHandlerRemote();
    constructor() {
        const factory = CustomHelpBubbleHandlerFactory.getRemote();
        factory.createCustomHelpBubbleHandler(this.handler_.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance || (instance = new CustomHelpBubbleProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    getHandler() {
        return this.handler_;
    }
}
let instance = null;
