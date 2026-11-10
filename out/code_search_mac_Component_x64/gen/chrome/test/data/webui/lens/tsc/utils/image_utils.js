// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function waitForScreenshotRendered(selectionOverlay) {
    return new Promise((resolve) => {
        const observer = new ResizeObserver(() => {
            if (selectionOverlay.offsetHeight > 0) {
                resolve();
                observer.unobserve(selectionOverlay);
            }
        });
        observer.observe(selectionOverlay);
    });
}
export function fakeScreenshotBitmap(width = 1, height = 1) {
    return {
        imageInfo: {
            width,
            height,
            colorType: 0,
            alphaType: 0,
            colorTransferFunction: [],
            colorToXyzMatrix: [],
        },
        pixelData: {
            bytes: Array(4 * width * height).fill(0),
        },
        uNUSEDRowBytes: BigInt(0),
    };
}
