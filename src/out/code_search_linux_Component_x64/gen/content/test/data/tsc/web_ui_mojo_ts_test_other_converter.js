// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class MappedDictConverter {
    data(dict) {
        const converted = {};
        for (let k of dict.keys()) {
            converted[k] = dict.get(k) || '';
        }
        return converted;
    }
    convert(view) {
        const converted = new Map();
        for (let k in view.data) {
            converted.set(k, view.data[k]);
        }
        return converted;
    }
}
