// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DriveSuggestionHandler } from '../../drive_suggestion.mojom-webui.js';
/**
 * @fileoverview This file provides a class that exposes the Mojo handler
 * interface used for sending requests from NTP dummy module JS to the browser
 * and receiving the browser response.
 */
let handler = null;
export class FileProxy {
    static getHandler() {
        return handler || (handler = DriveSuggestionHandler.getRemote());
    }
    static setHandler(newHandler) {
        handler = newHandler;
    }
    constructor() { }
}
