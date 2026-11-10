// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var SettingsItemType;
(function (SettingsItemType) {
    SettingsItemType[SettingsItemType["MENU"] = 1] = "MENU";
    SettingsItemType[SettingsItemType["TOGGLE"] = 2] = "TOGGLE";
    SettingsItemType[SettingsItemType["ACTION"] = 3] = "ACTION";
    SettingsItemType[SettingsItemType["RADIO"] = 4] = "RADIO";
    SettingsItemType[SettingsItemType["EXPAND"] = 5] = "EXPAND";
})(SettingsItemType || (SettingsItemType = {}));
