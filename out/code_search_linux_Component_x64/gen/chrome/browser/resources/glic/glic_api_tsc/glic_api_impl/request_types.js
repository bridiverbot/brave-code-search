// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var ImageAlphaType;
(function (ImageAlphaType) {
    // RGB values are unmodified.
    ImageAlphaType[ImageAlphaType["UNPREMUL"] = 0] = "UNPREMUL";
    // RGB values have been premultiplied by alpha.
    ImageAlphaType[ImageAlphaType["PREMUL"] = 1] = "PREMUL";
})(ImageAlphaType || (ImageAlphaType = {}));
// Chromium currently only uses a single color type for BitmapN32.
export var ImageColorType;
(function (ImageColorType) {
    ImageColorType[ImageColorType["BGRA"] = 0] = "BGRA";
    ImageColorType[ImageColorType["RGBA"] = 1] = "RGBA";
})(ImageColorType || (ImageColorType = {}));
export class ErrorWithReasonImpl extends Error {
    reasonType;
    reason;
    constructor(reasonType, reason, message) {
        super(message ?? `${reasonType} Error: ${reason}`);
        this.reasonType = reasonType;
        this.reason = reason;
    }
}
