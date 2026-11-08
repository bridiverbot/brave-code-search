// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DummyKeyboardShortcutDelegate {
    setShortcutHandlingSuspended(_isCapturing) { }
    updateExtensionCommandKeybinding(_extensionId, _commandName, _keybinding) { }
    updateExtensionCommandScope(_extensionId, _commandName, _scope) { }
}
export function createDummyKeyboardShortcutDelegate() {
    return new DummyKeyboardShortcutDelegate();
}
