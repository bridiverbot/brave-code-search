// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { deserializeKeyEvent } from './pdf_scripting_api.js';
export function convertDocumentDimensionsMessage(message) {
    return message;
}
export function convertFormFocusChangeMessage(message) {
    return message;
}
export function convertLoadProgressMessage(message) {
    return message;
}
export function convertSendKeyEventMessage(message) {
    const keyEventData = message;
    return deserializeKeyEvent(keyEventData.keyEvent);
}
