// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class SimpleTypeConverter {
    value(mappedType) {
        return mappedType;
    }
    convert(dataView) {
        return dataView.value;
    }
}
